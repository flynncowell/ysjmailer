var express = require("express")(),
     mailer = require("expressmailer");

mailer.extend(app, {
     from:'cowellflynn@gmail.com', 
     host: 'smtp.gmail.com',
     port:  465,
     transportMethod: "SMPTP",
     auth: {
          user: 'cowellflynn@gmail.com',
          pass: 'pup279FC'
     }
});

