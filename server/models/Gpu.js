const mongoose = require("mongoose");

const GpuSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Nvidia Geforce RTX 4090
  company: { type: String, required: true },
  model: { type: String, required: true, unique: true }, // RTX 4090
  tier: { type: Number, required: true }, // 9
  gen: { type: Number, required: true }, // 4
  launchDate: { type: String, required: true }, // Q3'23
  cores: { type: Number, required: true }, // 16384
  maxRes: [
    {
      res: { type: String, required: true }, // 4K
      refresh: { typs: Number, required: true }, // 240
    },
  ],
  cache: {
    L1: { type: Number, required: true }, // 2
    L2: { type: Number, required: true }, // 4
    L3: { type: Number, required: true }, // 20
  },
  benchMarks: [
    {
      name: { type: String, required: true }, // blender
      score: { type: Number, required: true }, // 11234
    },
  ],
  TDP: { type: Number, required: true }, // 125
  platform: { type: String, required: true }, // Desktop
  boostFreq: { type: Number, required: true }, // 5.3
  baseFreq: { type: Number, required: true }, // 3.7
  pcieGen: { type: Number, required: true }, // 4
  mem: { type: Number, required: true }, // 24
  memType: { type: String, required: true }, // GDDR6X
});

const GpuModel = mongoose.model("Gpus", GpuSchema);

module.exports = GpuModel;
