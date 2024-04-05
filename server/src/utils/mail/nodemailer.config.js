import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config();

export const sendMailTest = async ({ email, HTMLScript} ) => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    const mailOptions = {
      from: "aladinta68@gmail.com",
      to: email,
      subject:"Reset password",
      html: HTMLScript,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log("error: ", error);
  }
};