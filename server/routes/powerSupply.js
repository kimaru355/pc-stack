const express = require("express");
const {
  addPowerSupply,
  getPowerSupplies,
  getPowerSupply,
} = require("../controllers/powersupply");

const PowerSupplyRouter = express.Router();

PowerSupplyRouter.get("/", getPowerSupplies);

PowerSupplyRouter.get("/powersupply", getPowerSupply);

PowerSupplyRouter.post("/add", addPowerSupply);

module.exports = PowerSupplyRouter;
