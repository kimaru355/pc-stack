const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/user");
const cpuRouter = require("./routes/cpu");
const defaultRouter = require("./routes/default");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/users", UserRouter);
app.use("/cpus", cpuRouter);
app.use("/*", defaultRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
