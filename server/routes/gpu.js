const express = require("express");
const { addGpu, getGpus, getGpu } = require("../controllers/gpu");

const gpuRouter = express.Router();

gpuRouter.get("/", getGpus);

gpuRouter.get("/gpu", getGpu);

gpuRouter.post("/add", addGpu);

module.exports = gpuRouter;
