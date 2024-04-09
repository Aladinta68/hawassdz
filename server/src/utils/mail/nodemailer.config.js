import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendMailTest = async ({ email, HTMLScript }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: email,
      subject: "Reset password",
      html: HTMLScript,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); 
  } catch (error) {
    console.log("error: ", error);
  }
};
