import nodemailer from "nodemailer";

const emailsender = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ntueemks.forwp1101.2022@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "ntueemakerspace@gmail.com",
    to: data.target,
    subject: data.subject,
    html: data.content,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export default emailsender;
