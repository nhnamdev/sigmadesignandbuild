import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { handleContactRequest } from "./api/contact.js";

function contactApiPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed." }));
          return;
        }

        let rawBody = "";

        req.on("data", (chunk) => {
          rawBody += chunk;
        });

        req.on("end", async () => {
          let body = {};

          try {
            body = rawBody ? JSON.parse(rawBody) : {};
          } catch {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Invalid request body." }));
            return;
          }

          const result = await handleContactRequest({
            method: req.method,
            body,
            resendApiKey: env.RESEND_API_KEY,
            fromEmail: env.RESEND_FROM_EMAIL,
            toEmail: env.RESEND_TO_EMAIL
          });

          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.body));
        });
      });
    }
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), contactApiPlugin(mode)]
}));
