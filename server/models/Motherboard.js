const mongoose = require("mongoose");

const MotherboardSchema = mongoose.Schema({
  name: { type: String, required: true }, // ASUS ROG Maximus Z790 Hero
  company: { type: String, required: true }, // Asus
  model: { type: String, required: true }, // Z790
  tier: { type: String, required: true }, // Hero
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
  wifi: { hasWiFi: { type: Boolean, required: true }, wiFi: String }, // true WiFi 6
});

const MotherboardModel = mongoose.model("Motherboards", MotherboardSchema);

module.exports = MotherboardModel;
