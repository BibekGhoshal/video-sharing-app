
const express = require("express");
require("../db/conn.js");
const User = require("../models/UserSchema.js");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, phone, profession, password } = req.body;

  if (!name || !email || !phone || !profession || !password) {
    return res.status(422).json({ status: "Failed", message: "Please fill in all the fields" });
  }

  try {
    const emailExists = await User.findOne({ email: email });
    const phoneExists = await User.findOne({ phone: phone });

    if (emailExists) {
      return res.status(422).json({ status: "Failed", message: "Email already exists" });
    }

    if (phoneExists) {
      return res.status(422).json({ status: "Failed", message: "Phone number already exists" });
    }

    const newUser = new User({ name, email, phone, profession, password });
    await newUser.save();

    res.status(201).json({ status: "Success", message: "User registration successful" });
  } catch (err) {
    res.status(500).json({ status: "Failed", message: "Something went wrong" });
  }
});

module.exports = router;
