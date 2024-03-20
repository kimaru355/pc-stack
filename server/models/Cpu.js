const mongoose = require("mongoose");

const CpuSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Intel Core i9-10900K
  model: { type: String, required: true, unique: true }, // i9-10900K
  tier: { type: String, required: true }, // i9
  gen: { type: Number, required: true }, // 10
  launchDate: { type: String, required: true }, // Q2'20
  cores: { type: Number, required: true }, // 10
  threads: { type: Number, required: true }, // 20
  cache: {
    L1: { type: Number, required: true }, // 2
    L2: { type: Number, required: true }, // 4
    L3: { type: Number, required: true }, // 20
  },
  benchMarks: [
    {
      name: { type: String, required: true }, // blender
      score: { type: Number, required: true }, // 142
    },
  ],
  cpuSocket: { type: String, required: true }, // FCLGA1200
  TDP: { type: Number, required: true }, // 125
  platform: { type: String, required: true }, // Desktop
  maxTurboFreq: { type: Number, required: true }, // 5.3
  baseFreq: { type: Number, required: true }, // 3.7
  hasIGpu: { type: Boolean, required: true }, // true
  memType: { type: String, required: true }, // DDR4-2933
  memFreq: { type: Number, required: true }, // 5200
});

const CpuModel = mongoose.model("Cpus", CpuSchema);

module.exports = CpuModel;
