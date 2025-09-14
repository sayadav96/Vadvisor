import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();
    const { yourName, yourNumber, yourEmail, studyDestination, intakeYear } = body;

    // Read HTML template
    const templatePath = path.join(process.cwd(), "mail", "templates", "contactTemplate.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders
    htmlTemplate = htmlTemplate
      .replace(/{{ yourName }}/g, yourName)
      .replace(/{{ yourNumber }}/g, yourNumber)
      .replace(/{{ yourEmail }}/g, yourEmail)
      .replace(/{{ studyDestination }}/g, studyDestination)
      .replace(/{{ intakeYear }}/g, intakeYear);

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // inquiry.vadvisoroverseas@gmail.com
        pass: process.env.MAIL_PASS, // app password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"VAdvisor Overseas" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER || process.env.MAIL_USER,
      subject: "New Contact Us Submission",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
