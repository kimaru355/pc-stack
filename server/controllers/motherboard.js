const MotherboardModel = require("../models/motherboard.js");

const addMotherboard = async (req, res) => {
  const { name, model } = req.body;

  let motherboard = await MotherboardModel.findOne({
    name: name,
    model: model,
  });

  if (motherboard) {
    return res
      .status(409)
      .send({ success: false, message: "motherboard already exists" });
  }
  try {
    motherboard = await new MotherboardModel({ ...req.body });
    await motherboard.save();
    res.status(200).send({ success: true, message: "motherboard added" });
  } catch (e) {
    res.status(400).send({ success: false, message: "Bad Request" });
  }
};

const getMotherboards = async (req, res) => {
  let motherboard = await MotherboardModel.find();

  if (motherboard.length === 0) {
    return res
      .status(404)
      .send({ success: false, message: "No motherboards found" });
  }
  res
    .status(200)
    .send({ success: true, message: "motherboards found", data: motherboard });
};

const getMotherboard = async (req, res) => {
  let properties = req.body;

  let motherboard = await MotherboardModel.find({ ...properties });
  if (motherboard.length === 0) {
    return res
      .status(404)
      .send({ success: false, message: "No motherboard found" });
  }
  res
    .status(200)
    .send({ success: true, message: "motherboard found", data: motherboard });
};

module.exports = { addMotherboard, getMotherboards, getMotherboard };
