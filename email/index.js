const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'stephany.justino@sptech.school',
    pass: '#Gf24007915890'
  }
});

var mailOptions = {
  from: 'stephany.justino@sptech.school',
  to: 'stephany.justino@sptech.school',
  subject: 'Enviado email com node js. TESTE ',
  text: 'Estou muito feliz em anunciar que finalmente consegui fazer o nodemailer funcionar! Depois de passar horas tentando, finalmente consegui entender como configurar o nodemailer para enviar emails.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Deu algo de errado! 🤦🏽‍♂️: '+error);
  } else {
    console.log('Email foi enviado com sucesso! 🩵: ' + info.response);
  }
});