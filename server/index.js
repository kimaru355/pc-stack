const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const handleJsonError = require("./controllers/handleJsonError");
const AuthRouter = require("./routes/auth");
const cpuRouter = require("./routes/cpu");
const gpuRouter = require("./routes/gpu");
const MotherboardRouter = require("./routes/motherboard");
const defaultRouter = require("./routes/default");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(handleJsonError);
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/cpus", cpuRouter);
app.use("/gpus", gpuRouter);
app.use("/motherboards", MotherboardRouter);
app.use("/*", defaultRouter);

async function connectDB() {
  try {
    let db = await mongoose.connect("mongodb://localhost:27017/pc-stack");
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log("Server Listening on port 3000...");
    });
  } catch (e) {
    console.log(e);
  }
}
connectDB();
