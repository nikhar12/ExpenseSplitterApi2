const nodemailer = require('nodemailer');



  let gmail = (to,subject,text) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sharnikedwisor',
          pass: 'sharnik@123' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'sharnikedwisor@gmail.com',
        to: to,
        subject: subject,
        text: text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
  }

  module.exports = {
    gmail: gmail
  };