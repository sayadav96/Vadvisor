import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function GET() {
  return new Response("API is alive", { status: 200 });
}

export async function POST(req) {
  try {
    console.log("POST /api/contact called");

    const body = await req.json();
    console.log("Request body:", body);

    const { yourName, yourNumber, yourEmail, studyDestination, intakeYear } = body;
    console.log("Parsed fields:", { yourName, yourNumber, yourEmail, studyDestination, intakeYear });

    // Read HTML template
    const templatePath = path.join(process.cwd(), "mail", "templates", "contactTemplate.html");
    console.log("Template path:", templatePath);

    let htmlTemplate;
    try {
      htmlTemplate = fs.readFileSync(templatePath, "utf8");
      console.log("Template read successfully");
    } catch (err) {
      console.error("Error reading template:", err);
      return new Response(JSON.stringify({ success: false, error: "Template not found" }), { status: 500 });
    }

    // Pick the correct base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vadvisor-fawn.vercel.app";
    console.log("Base URL:", baseUrl);

    // Replace placeholders
    htmlTemplate = htmlTemplate
      .replace(/{{ yourName }}/g, yourName)
      .replace(/{{ yourNumber }}/g, yourNumber)
      .replace(/{{ yourEmail }}/g, yourEmail)
      .replace(/{{ studyDestination }}/g, studyDestination)
      .replace(/{{ intakeYear }}/g, intakeYear)
      .replace(/{{ logoUrl }}/g, `${baseUrl}/images/logo.png`);
    console.log("Placeholders replaced");

    // Configure transporter
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
      console.log("Transporter configured");
    } catch (err) {
      console.error("Error configuring transporter:", err);
      return new Response(JSON.stringify({ success: false, error: "Transporter setup failed" }), { status: 500 });
    }

    // Mail options
    const mailOptions = {
      from: `"VAdvisor Overseas" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER || process.env.MAIL_USER,
      subject: "New Contact Us Submission",
      html: htmlTemplate,
    };
    console.log("Mail options prepared");

    // Send mail
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Mail sent successfully:", info);
    } catch (err) {
      console.error("Error sending mail:", err);
      return new Response(JSON.stringify({ success: false, error: "Failed to send mail" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error in POST /api/contact:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
