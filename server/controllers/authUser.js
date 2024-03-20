const UserModel = require("../models/user.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email: email, password: password });
  if (user) {
    return res.status(200).send({ success: true, message: "Logged in" });
  }
  res
    .status(401)
    .send({ success: false, message: "Invalid email and/or password" });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ success: false, message: "Email already exists" });
  }
  user = await new UserModel({ email: email, password: password });
  await user.save();
  res.status(201).send({ success: true, message: "User registered" });
};

module.exports = { login, register };
