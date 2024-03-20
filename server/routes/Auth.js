const express = require("express");
const { login, register } = require("../controllers/authUser.js");

const AuthRouter = express.Router();

AuthRouter.post("/login", login);

AuthRouter.post("/register", register);

module.exports = AuthRouter;
