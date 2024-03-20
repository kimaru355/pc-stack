const express = require("express");
const { login, register, getUsers } = require("../controllers/authUser.js");

const AuthRouter = express.Router();

AuthRouter.post("/login", login);

AuthRouter.post("/register", register);

AuthRouter.get("/users", getUsers);

module.exports = AuthRouter;
