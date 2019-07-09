const nodemailer = require("nodemailer");

exports.handler = (event, _, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST",
      'Access-Control-Allow-Headers': 'Content-Type', 
    },
    body: JSON.stringify(event.body),
    main: (async function(){
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      const { email, text, name } = JSON.parse(event.body)

      const info = await transporter.sendMail({
        from: email,
        to: "brandon.gregori@gmail.com, gregori.email.forwarder@gmail.com",
        subject: `Email from ${name}, email: ${email}`,
        text: email + text,
        html: `<a href="mailto: ${email}">${email}</a><p>${text}</p>`
      });
      console.log("NEW EMAIL SENT")
      console.log(info.messageId);
      console.log("name: " + name);
      console.log("email: " + email);
      console.log("message: " + text);
    })().catch(console.error)
  });
}