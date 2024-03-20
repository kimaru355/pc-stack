const express = require("express");
const [
  defaultGet,
  defaultPost,
  defaultPut,
  defaultDelete,
] = require("../controllers/default");

const defaultRouter = express.Router();

defaultRouter.get("/*", defaultGet);
defaultRouter.post("/*", defaultPost);
defaultRouter.put("/*", defaultPut);
defaultRouter.delete("/*", defaultDelete);

module.exports = defaultRouter;
