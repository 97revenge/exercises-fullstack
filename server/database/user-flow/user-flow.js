const express = require("express");
const router = express.Router();
const data = require("./data.json");

function Middleware(tag) {
  this.get = function () {
    router.get("/flow", (res) => {
      res.json(data);
    });
  };

  this.tag = function () {
    router.get("/flow/:tag", (req, res) => {
      tag = req.params.tag;
      res.json(data[tag]);
    });
  };
}

const result = Object.keys(data);

result.forEach((item) => {
  const middleware = new Middleware(String(item));
  middleware.get();
  middleware.tag();
});

module.exports = router;
