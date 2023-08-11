const express = require("express");
const exercises = require("./exercises.json");
const router = express.Router();

router.get("/exercises", (req, res) => {
  res.json(exercises);
});

router.post("/exercises", (req, res) => {
  const { id, name, author, exercises, code, solution, completed } = req.body;
  // importante esse tipo de validacao desde o back-end ao front-end.
  const created = [id, name, author, exercises, code, solution, completed];

  created.map((item) => {
    if (!item) {
      res
        .status(401)
        .json({ messase: "voce precisa de todos esses campos..." });
    }
  });

  res.status(201).json({ message: "ok ! " });
});

module.exports = router;
