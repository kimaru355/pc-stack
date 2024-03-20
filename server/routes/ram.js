const express = require("express");
const { addRam, getRams, getRam } = require("../controllers/ram");

const ramRouter = express.Router();

ramRouter.get("/", getRams);

ramRouter.get("/ram", getRam);

ramRouter.post("/add", addRam);

module.exports = ramRouter;
