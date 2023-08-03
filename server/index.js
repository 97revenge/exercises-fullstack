const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const img = require("./database/img.json");
const router = require("./database/style/style");
app.use(cors());

app.use("/style", router);

app.route("/db").get((req, res) => {
  res.json(img);
});

app.listen(PORT, console.log("running"));
