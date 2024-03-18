const express = require("express");
const UserModel = require("../models/User.js");

const AuthRouter = express.Router();

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email: email, password: password });
  if (user) {
    return res.status(200).send({ success: true, message: "User exists" });
  }
  res
    .status(401)
    .send({ success: false, message: "Invalid username and/or password" });
});

AuthRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ success: false, message: "Email already exists" });
  }
  user = await new UserModel({ email: email, password: password });
  await user.save();
  res.status(201).send({ success: true, message: "User Created" });
});

module.exports = AuthRouter;
