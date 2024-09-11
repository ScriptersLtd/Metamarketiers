import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with the actual recipient email
    const password = process.env.SMTPPASSWORD; // Replace with the actual recipient email
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: toEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: toEmail,
      to: toEmail,
      subject: `CONTACT: Metamarketiers received from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
      `,
    };
    await transporter.sendMail(mailOptions);
    return new Response("message Sent", { status: 200 });
} catch (error) {
  console.error("Error handling form data:", error);
  return new Response("Failed to submit form", { status: 500 });
}
};
