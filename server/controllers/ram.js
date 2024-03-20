const RamModel = require("../models/ram.js");

const addRam = async (req, res) => {
  const { name, company, memType, memFreq, memCapacity } = req.body;

  let ram = await RamModel.findOne({
    name,
    company,
    memType,
    memFreq,
    memCapacity,
  });

  if (ram) {
    return res
      .status(409)
      .send({ success: false, message: "ram already exists" });
  }
  try {
    ram = await new RamModel({ ...req.body });
    await ram.save();
    res.status(200).send({ success: true, message: "ram added" });
  } catch (e) {
    res.status(400).send({ success: false, message: "Bad Request" });
  }
};

const getRams = async (req, res) => {
  let ram = await RamModel.find();

  if (ram.length === 0) {
    return res.status(404).send({ success: false, message: "No rams found" });
  }
  res.status(200).send({ success: true, message: "rams found", data: ram });
};

const getRam = async (req, res) => {
  let properties = req.body;

  let ram = await RamModel.find({ ...properties });
  if (ram.length === 0) {
    return res.status(404).send({ success: false, message: "No ram found" });
  }
  res.status(200).send({ success: true, message: "ram found", data: ram });
};

module.exports = { getRams, addRam, getRam };
