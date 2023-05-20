'use strict';

const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport(transport[, defaults])
//transporter = object able to send mail
//transport = tranpsort config object, connection url, or transport plugin instance
//defaults = object that defines default values for mail options

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kchn.alchemy@gmail.com',
        pass: 'swfozpmctersxcbp',
    },
   
});


transporter.sendMail({
    from: 'kchn.alchemy@gmail.com',
    to: 'sarah.n.jensen@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets delivered!'
}, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
});


// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });