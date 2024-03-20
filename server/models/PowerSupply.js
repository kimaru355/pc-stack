const mongoose = require("mongoose");

const PowerSupplySchema = mongoose.Schema({
  name: { type: String, required: true }, // Aigo GP850 80Plus Bronze
  company: { type: String, required: true }, // Aigo
  model: { type: String, required: true }, // GP850
  tier: { type: Number, required: true }, // Bronze
  interfaces: [
    {
      name: { type: String, required: true }, // CPU
      interface: { type: String, required: true }, // P4+4
    },
  ],
  platform: { type: String, required: true }, // Desktop
  rating: { type: Number, required: true }, // 650
  max: { type: Number, required: true }, // 850
});

const PowerSupplyModel = mongoose.model("PowerSupplies", PowerSupplySchema);

module.exports = PowerSupplyModel;
