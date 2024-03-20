const mongoose = require("mongoose");

const RamSchema = mongoose.Schema({
  name: { type: String, required: true }, // VENGEANCE® RGB 16GB DDR5 DRAM 5200MT/s CL40 Memory Kit — Black
  company: { type: String, required: true }, // Corsair
  memType: { type: String, required: true }, // DDR4
  memFreq: { type: Number, required: true }, // 5200
  memCapacity: { type: Number, required: true }, // 32
});

const RamModel = mongoose.model("Cpus", RamSchema);

module.exports = RamModel;
