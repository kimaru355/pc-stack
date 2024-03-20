const handleJsonError = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Malformed JSON
    return res.status(400).json({ error: "Bad request - Invalid JSON" });
  }
  next();
};

module.exports = handleJsonError;
