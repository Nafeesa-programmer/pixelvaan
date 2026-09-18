import dns from "dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { Resend } from "resend";

dns.setServers(["1.1.1.1"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "hello@pixelvaan.com";

let inquiriesCollection;

app.use(cors());
app.use(express.json());

async function connectDatabase() {
  try {
    const client = new MongoClient(MONGODB_URI);

    await client.connect();

    const db = client.db("pixelvaan");

    inquiriesCollection = db.collection("inquiries");

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

app.get("/", (req, res) => {
  res.json({
    message: "Pixelvaan API is running",
  });
});

app.post("/api/inquiries", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      service,
      message,
    } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const inquiry = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "",
      service: service.trim(),
      message: message.trim(),
      createdAt: new Date(),
    };

    const result =
      await inquiriesCollection.insertOne(inquiry);

    console.log(
      `Inquiry saved: ${result.insertedId}`
    );

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: inquiry.email,
      subject: `New project inquiry — ${inquiry.name}`,
      text: `
New project inquiry received.

Name: ${inquiry.name}
Email: ${inquiry.email}
Company: ${inquiry.company || "Not provided"}
Service: ${inquiry.service}

Project details:
${inquiry.message}

Submitted:
${inquiry.createdAt.toISOString()}
      `.trim(),
    });

    if (error) {
      console.error(
        "Resend email failed:",
        error
      );

      return res.status(500).json({
        message:
          "Your inquiry was saved, but we could not send the notification email.",
      });
    }

    console.log("Inquiry notification email sent");

    return res.status(201).json({
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Inquiry submission failed:",
      error
    );

    return res.status(500).json({
      message:
        "Something went wrong while submitting your inquiry.",
    });
  }
});

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}`
    );
  });
}

startServer();