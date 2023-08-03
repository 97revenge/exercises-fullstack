const nav = require("./nav/style.json");
const banner = require("./banner/style.json");
const section = require("./section/style.json");
const footer = require("./footer/style.json");
const card = require("./card/style.json");

const express = require("express");
const router = express.Router();

router.get("/nav", (req, res) => {
  res.json(nav);
});

router.get("/banner", (req, res) => {
  res.json(banner);
});
router.get("/section", (req, res) => {
  res.json(section);
});

router.get("/footer", (req, res) => {
  res.json(footer);
});

router.get("/card", (req, res) => {
  res.json(card);
});

module.exports = router;
