const express = require("express");
const { getUsers } = require("../controllers/user");

const UserRouter = express.Router();

UserRouter.get("/", getUsers);

module.exports = UserRouter;
