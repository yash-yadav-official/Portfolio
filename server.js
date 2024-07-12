const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lucasgalvao134@gmail.com',
    pass: 'iodl tunb jtuq wpce'
  }
});

app.post('/send-email', (req, res) => {
  const { fullname, email, message } = req.body;

  const mailOptionsToYou = {
    from: email,
    to: 'lucasgalvao134@gmail.com',
    subject: 'New Contact Form Message',
    text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
  };

  const mailOptionsToUser = {
    from: 'lucasgalvao134@gmail.com',
    to: email,
    subject: 'Confirmation of Your Message',
    text: 'Thank you for your message. We have received it and will get back to you shortly.'
  };

  transporter.sendMail(mailOptionsToYou, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    transporter.sendMail(mailOptionsToUser, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Message sent successfully.');
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
