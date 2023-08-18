const express = require("express");
const data = require("./data.json");

const router = express.Router();

function Middleware(tag) {
  this.data = function () {
    router.get("/aplyer", (req, res) => {
      res.json(data);
    });
    this.id = function () {
      router.get("/aplyer/:id", (req, res) => {
        res.json(data[tag]);
      });
    };
  };
}

const result = Object.keys(data);
result.forEach((item) => {
  const middleware = new Middleware(String(item));
  middleware.data();
  middleware.id();
});

module.exports = router;
