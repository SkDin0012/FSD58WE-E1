const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/forget-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ message: 'User not found.' });

  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: user.email,
    from: 'passwordreset@example.com',
    subject: 'Password Reset',
    text: `Please click on the following link\n\n http://localhost:3000/reset-password/${resetToken} \n\n`,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) return res.status(500).send({ message: 'Error sending email.' });
    res.send({ message: 'A reset link has been sent to your email address.' });
  });
});


router.post('/reset-password/:token', async (req, res) => {
  const user = await User.findOne({ resetToken: req.params.token, resetTokenExpiry: { $gt: Date.now() } });
  if (!user) return res.status(400).send({ message: 'Password reset token is invalid or has expired.' });

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.send({ message: 'Password has been reset.' });
});

module.exports = router;
