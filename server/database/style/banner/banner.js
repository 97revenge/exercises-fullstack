const express = require("express");

const router = express.Router();

const banner = require("./banner.json");

function Middleware(tag) {
  this.tag = tag;

  router.get(`/exercises/banner/`, (req, res) => {
    res.json(banner);

    router.get(`/exercises/banner/:tag`, (req, res) => {
      res.json(banner[tag]);
    });
  });
}

const result = Object.keys(banner);

result.forEach((item) => {
  new Middleware(String(item));
});

module.exports = router;
