const defaultGet = (req, res) => {
  res.status(404).send({ success: false, message: "Resource not found" });
};
const defaultPost = (req, res) => {
  res.status(400).send({ success: false, message: "No such route" });
};
const defaultPut = (req, res) => {
  res.status(404).send({ success: false, message: "No such route" });
};
const defaultDelete = (req, res) => {
  res.status(404).send({ success: false, message: "No such route" });
};

module.exports = [defaultGet, defaultPost, defaultPut, defaultDelete];
