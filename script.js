require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-feedback', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received feedback:', { name, email, message });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'New Feedback from Portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Feedback sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
