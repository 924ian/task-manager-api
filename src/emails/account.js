const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adrian.batuto@gmail.com",
    subject: "Thanks for joining",
    text: `Welcome to the app ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adrian.batuto@gmail.com",
    subject: "Account cancellation",
    text: `Mr.${name} your account has been deleted`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
