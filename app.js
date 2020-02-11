var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransporter({
	service: 'gmail';
	auth: {
		user:'youremail@domain.com'
		pass:'emailpassword'
		}
	})

var mailOptions = {
	from: 'youremail@domain.com',
	to: 'friendemail@domain.com',
	subject: 'Sending emails with NodeJS',
	text:	'Check it out! https://github.com/flynncowell/ysjmailer'
	};
transporter.sendMail(mailoptions, function(error, info){
	if (error) {
		console.log(error);
	}	else {
		console.log('email sent:' + info.response);
}
});

