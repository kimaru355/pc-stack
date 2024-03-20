const mongoose = require("mongoose");

const MotherboardSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true }, // ASUS ROG Maximus Z790 Hero
  company: { type: String, required: true },
  model: { type: String, required: true }, // Z790
  tier: { type: Number, required: true }, // Hero
  ports: [
    {
      name: { type: String, required: true }, // USB 3.2
      number: { type: Number, required: true }, // 4
    },
  ],
  platform: { type: String, required: true }, // Desktop
  cpuSocket: { type: String, required: true }, // LGA 1700
  pcieGen: { type: Number, required: true }, // 4
  storageSlots: { type: Number, required: true }, // 4
  memSlots: { type: Number, required: true }, // 4
  memType: { type: String, required: true }, // DDR5
  wifi: { type: String }, // WiFi 6
});

const MotherboardModel = mongoose.model("Motherboards", MotherboardSchema);

module.exports = MotherboardModel;
