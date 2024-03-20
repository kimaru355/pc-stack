const express = require("express");
const addCpu = require("../controllers/cpu");
const getCpus = require("../controllers/cpu");

const cpuRouter = express.Router();

cpuRouter.post("/add", addCpu);

cpuRouter.get("", getCpus);

module.exports = cpuRouter;
