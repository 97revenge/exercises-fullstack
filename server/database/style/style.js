const express = require("express");
const router = express.Router();

app.get("nav", (req, res) => {
  res.json(style.nav);
});

module.exports = router;
