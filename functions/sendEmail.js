const nodemailer = require("nodemailer");

exports.handler = (event, _, callback) => {
    callback(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify(event.body),
        mailer: (async function() {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                tls: {
                    rejectUnauthorized: false
                },
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASSWORD
                }
            });
            const { email, text, name } = JSON.parse(event.body);
            const info = await transporter.sendMail({
                from: email,
                to: "brandon@brandon-gregori.com",
                replyTo: email,
                subject: `${name} from ${email} has reached out to you`,
                text: `${name}, ${text}`,
                html: ` <p style='color:black; opacity:1; visibility:visible; max-width:600px; display:block;'>${text}</p>`
            });
            console.log(`
        '~~~~~~~~~~~~~~~~~~~~~~~~~~* --NEW EMAIL SENT-- *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'

        -------id: ${info.messageId}
        -----name: ${name}
        ----email: ${email}
        --message: ${text}

        .~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~.
      `);
        })().catch(console.error)
    });
};
