const express = require("express");
const { addCpu, getCpus, getCpu } = require("../controllers/cpu");

const cpuRouter = express.Router();

cpuRouter.get("/", getCpus);

cpuRouter.get("/cpu", getCpu);

cpuRouter.post("/add", addCpu);

module.exports = cpuRouter;
