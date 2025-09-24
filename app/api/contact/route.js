import nodemailer from "nodemailer";

// Function to generate the HTML email template
// This replaces the need for fs.readFileSync
const createContactEmailTemplate = (data) => {
  const {
    yourName,
    yourNumber,
    yourEmail,
    studyDestination,
    intakeYear,
    logoUrl,
  } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>New Contact Us Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; color: #333; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; background-color: #fff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="VAdvisor Logo" style="max-width: 150px" />
          </div>
          <h2 style="text-align: center; color: #f4a53c;">New Contact Us Submission</h2>
          <p style="text-align: center;">You’ve received a new inquiry from <strong>${yourName}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0" />
          <h3 style="color: #333">Contact Information:</h3>
          <p><strong>Name:</strong> ${yourName}</p>
          <p><strong>Email:</strong> <a href="mailto:${yourEmail}" style="color: #f4a53c">${yourEmail}</a></p>
          <p><strong>Contact Number:</strong> ${yourNumber}</p>
          <h3 style="color: #333; margin-top: 20px">Study Preferences:</h3>
          <p><strong>Study Destination:</strong> ${studyDestination}</p>
          <p><strong>Intake Year:</strong> ${intakeYear}</p>
          <br />
          <p>Regards,<br /><strong>${yourName}</strong></p>
          <div style="border-top: 1px solid #ccc; padding-top: 10px; text-align: center; margin-top: 20px;">
            <p style="font-size: 12px; color: #888;">VAdvisor - Empowering Your Global Education Journey</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { yourName, yourNumber, yourEmail, studyDestination, intakeYear } =
      body;

    // Ensure all required fields are present
    if (
      !yourName ||
      !yourNumber ||
      !yourEmail ||
      !studyDestination ||
      !intakeYear
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Pick the correct base URL for the logo
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://vadvisor-nu.vercel.app";
    const logoUrl = `${baseUrl}/images/logo.png`;

    // Generate the HTML for the email
    const htmlTemplate = createContactEmailTemplate({ ...body, logoUrl });

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
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
    console.error("Email sending error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error" }), // Avoid leaking error details
      { status: 500 }
    );
  }
}
