const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  console.log("get users");
  res.status(200).send("Users found");
});
