const express = require("express");
const {
  addMotherboard,
  getMotherboards,
  getMotherboard,
} = require("../controllers/motherboard");

const MotherboardRouter = express.Router();

MotherboardRouter.get("/", getMotherboards);

MotherboardRouter.get("/motherboard", getMotherboard);

MotherboardRouter.post("/add", addMotherboard);

module.exports = MotherboardRouter;
