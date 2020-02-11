var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransporter({
	service: 'gmail';
	auth: {
		user:'cowellflynn@gmail.com'
		pass:'pup279FC'
		}
	})

var mailOptions = {
	from: 'cowellflynn@gmail.com',
	to: 'federico.galbiati@icloud.com',
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

