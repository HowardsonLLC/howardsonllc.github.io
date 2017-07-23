var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'coltr.howard@gmail.com',
    pass: 'x49r9rnrh30'
  }
});

var mailOptions = {
  from: 'coltr.howard@gmail.com',
  to: 'erinmoore21@yahoo.com, coltr.howard@gmail.com',
  subject: 'Sending Email using Node.js server',
  text: 'Sent from Coltons Server 8===>',
  html:''
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
