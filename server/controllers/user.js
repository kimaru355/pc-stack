const UserModel = require("../models/user.js");

const getUsers = async (req, res) => {
  let users = await UserModel.find();
  res.status(200).send(users);
};

module.exports = { getUsers };
