import { Resend } from "resend";

const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";
const DEFAULT_TO_EMAIL = "info@sigmadnb.ca";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePayload(body) {
  return {
    name: cleanValue(body?.name),
    city: cleanValue(body?.city),
    email: cleanValue(body?.email).toLowerCase(),
    phone: cleanValue(body?.phone),
    message: cleanValue(body?.message)
  };
}

function validatePayload(payload) {
  if (!payload.name || !payload.city || !payload.email || !payload.phone || !payload.message) {
    return "Please complete all required fields.";
  }

  if (!emailPattern.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (payload.name.length > 120 || payload.city.length > 120) {
    return "Name or city is too long.";
  }

  if (payload.phone.length > 40) {
    return "Phone number is too long.";
  }

  if (payload.message.length < 10 || payload.message.length > 3000) {
    return "Message must be between 10 and 3000 characters.";
  }

  return null;
}

function buildEmailContent(payload) {
  const safePayload = {
    name: escapeHtml(payload.name),
    city: escapeHtml(payload.city),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    message: escapeHtml(payload.message).replaceAll("\n", "<br />")
  };

  return {
    subject: `New website inquiry from ${payload.name}`,
    text: [
      "New contact request",
      `Name: ${payload.name}`,
      `City: ${payload.city}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      "Message:",
      payload.message
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1d212a;">
        <h2 style="margin-bottom: 16px;">New contact request</h2>
        <p><strong>Name:</strong> ${safePayload.name}</p>
        <p><strong>City:</strong> ${safePayload.city}</p>
        <p><strong>Email:</strong> ${safePayload.email}</p>
        <p><strong>Phone:</strong> ${safePayload.phone}</p>
        <p><strong>Message:</strong><br />${safePayload.message}</p>
      </div>
    `
  };
}

export async function handleContactRequest({
  method,
  body,
  resendApiKey,
  fromEmail = DEFAULT_FROM_EMAIL,
  toEmail = DEFAULT_TO_EMAIL
}) {
  if (method !== "POST") {
    return {
      status: 405,
      body: { error: "Method not allowed." }
    };
  }

  if (!resendApiKey) {
    return {
      status: 500,
      body: { error: "Contact form is not configured yet." }
    };
  }

  const payload = normalizePayload(body);
  const validationError = validatePayload(payload);

  if (validationError) {
    return {
      status: 400,
      body: { error: validationError }
    };
  }

  const resend = new Resend(resendApiKey);
  const emailContent = buildEmailContent(payload);
  const sender = cleanValue(fromEmail).toLowerCase() || DEFAULT_FROM_EMAIL;
  const recipient = cleanValue(toEmail).toLowerCase() || DEFAULT_TO_EMAIL;

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: payload.email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html
    });

    if (error) {
      console.error("Resend request failed:", error);

      return {
        status: 502,
        body: { error: error.message || "Could not send your message right now." }
      };
    }

    return {
      status: 200,
      body: { message: "Your message has been sent successfully." }
    };
  } catch (error) {
    console.error("Contact request failed:", error);

    return {
      status: 502,
      body: { error: "Could not send your message right now." }
    };
  }
}

export default async function handler(req, res) {
  let body = req.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: "Invalid request body." });
      return;
    }
  }

  const result = await handleContactRequest({
    method: req.method,
    body,
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.RESEND_FROM_EMAIL,
    toEmail: process.env.RESEND_TO_EMAIL
  });

  res.status(result.status).json(result.body);
}
