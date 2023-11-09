var nodemailer = require("nodemailer");

export async function sendMail(subject, htmlText) {


  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "admin@ozove.com.au",
    subject: subject,
    html: htmlText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}

export async function sendMailToCustomer(subject, toEmail, htmlText) {
  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: htmlText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}
