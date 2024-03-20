const CpuModel = require("../models/cpu.js");

const addCpu = async (req, res) => {
  const { name, model } = req.body;

  let cpu = await CpuModel.findOne({ name: name, model: model });

  if (cpu) {
    return res
      .status(409)
      .send({ success: false, message: "cpu already exists" });
  }
  try {
    cpu = await new CpuModel({ ...req.body });
    await cpu.save();
    res.status(200).send({ success: true, message: "cpu added" });
  } catch (e) {
    res.status(400).send({ success: false, message: "Bad Request" });
  }
};

const getCpus = async (req, res) => {
  let cpu = await CpuModel.find();

  if (!cpu) {
    return res.status(404).send({ success: false, message: "No cpus found" });
  }
  res.status(200).send({ success: true, message: "cpus found", data: cpu });
};

const getCpu = async (req, res) => {
  let properties = req.body;

  let cpu = await CpuModel.find({ ...properties });
  if (cpu.length === 0) {
    return res.status(404).send({ success: false, message: "No cpu found" });
  }
  res.status(200).send({ success: true, message: "cpu found", data: cpu });
};

module.exports = { getCpus, addCpu, getCpu };
