const GpuModel = require("../models/gpu.js");

const addGpu = async (req, res) => {
  const { name, model } = req.body;

  let gpu = await GpuModel.findOne({ name: name, model: model });

  if (gpu) {
    return res
      .status(409)
      .send({ success: false, message: "gpu already exists" });
  }
  try {
    gpu = await new GpuModel({ ...req.body });
    await gpu.save();
    res.status(200).send({ success: true, message: "gpu added" });
  } catch (e) {
    res.status(400).send({ success: false, message: "Bad Request" });
  }
};

const getGpus = async (req, res) => {
  let gpu = await GpuModel.find();

  if (gpu.length === 0) {
    return res.status(404).send({ success: false, message: "No gpus found" });
  }
  res.status(200).send({ success: true, message: "gpus found", data: gpu });
};

const getGpu = async (req, res) => {
  let properties = req.body;

  let gpu = await GpuModel.find({ ...properties });
  if (gpu.length === 0) {
    return res.status(404).send({ success: false, message: "No gpu found" });
  }
  res.status(200).send({ success: true, message: "gpu found", data: gpu });
};

module.exports = { addGpu, getGpus, getGpu };
