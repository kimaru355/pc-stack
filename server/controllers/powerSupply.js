const PowerSupplyModel = require("../models/powerSupply.js");

const addPowerSupply = async (req, res) => {
  const { name, model, tier } = req.body;

  let powerSupply = await PowerSupplyModel.findOne({
    name: name,
    model: model,
    tier: tier,
  });

  if (powerSupply) {
    return res
      .status(409)
      .send({ success: false, message: "powerSupply already exists" });
  }
  try {
    powerSupply = await new PowerSupplyModel({ ...req.body });
    await powerSupply.save();
    res.status(200).send({ success: true, message: "powerSupply added" });
  } catch (e) {
    res.status(400).send({ success: false, message: "Bad Request" });
  }
};

const getPowerSupplies = async (req, res) => {
  let powerSupply = await PowerSupplyModel.find();

  if (powerSupply.length === 0) {
    return res
      .status(404)
      .send({ success: false, message: "No powerSupplies found" });
  }
  res
    .status(200)
    .send({ success: true, message: "powerSupplies found", data: powerSupply });
};

const getPowerSupply = async (req, res) => {
  let properties = req.body;

  let powerSupply = await PowerSupplyModel.find({ ...properties });
  if (powerSupply.length === 0) {
    return res
      .status(404)
      .send({ success: false, message: "No powerSupply found" });
  }
  res
    .status(200)
    .send({ success: true, message: "powerSupply found", data: powerSupply });
};

module.exports = { addPowerSupply, getPowerSupplies, getPowerSupply };
