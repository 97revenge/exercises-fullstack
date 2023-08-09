const express = require("express");
const cors = require("cors");
const router = express.Router();

const banner = require("./banner.json");

router.use(cors());

function Middleware(tag) {
  this.tag = tag;

  this.all = function () {
    router.get(`/exercises/banner/`, (req, res) => {
      res.json(banner);
    });
  };

  this.tag = function () {
    router.get(`/exercises/banner/:tag`, (req, res) => {
      res.json(banner[tag]);
    });
  };
}

const result = Object.keys(banner);

result.forEach((item) => {
  const elem = new Middleware(String(item));
  elem.all();
  elem.tag();
});

module.exports = router;
