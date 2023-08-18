const openapi = require("./openapi.json");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const img = require("./database/img.json");
const database = require("./database/database");
const style = require("./database/style/style");
const exercises = require("./database/exercises/exercises");
const newBanner = require("./database/style/banner/banner");

app.use("/", newBanner);

app.use(cors());

app.use("/style", style);

app.use("/database", database);

app.use("/", exercises);

app.route("/db").get((req, res) => {
  res.json(img);
});

function generateServers() {
  app.get("/servers", (req, res) => {
    const server = openapi.servers;

    res.json(server);
  });
  const server = openapi.servers;
  server.forEach((item) => {
    app.get(`/servers/${item.name}`, (req, res) => {
      res.json(item.url);
    });
  });
}
generateServers();

app.listen(PORT, console.log("running"));
