const express = require("express");
const { addCpu, getCpus, getCpu } = require("../controllers/cpu");

const cpuRouter = express.Router();

cpuRouter.get("/", getCpus);

cpuRouter.post("/add", addCpu);

cpuRouter.post("/cpu", getCpu);

module.exports = cpuRouter;
