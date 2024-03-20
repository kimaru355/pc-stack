const express = require("express");
const { addCpu, getCpus } = require("../controllers/cpu");

const cpuRouter = express.Router();

cpuRouter.get("/", getCpus);

cpuRouter.post("/add", addCpu);

module.exports = cpuRouter;
