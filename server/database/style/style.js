const nav = require("./nav/style.json");

const express = require("express");
const router = express.Router();

router.get("/nav", (req, res) => {
  res.json(nav);
});

module.exports = router;
