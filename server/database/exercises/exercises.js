const express = require("express");
const exercises = require("./exercises.json");
const router = express.Router();

router.get("/exercises", (req, res) => {
  res.json(exercises);
});

module.exports = router;
