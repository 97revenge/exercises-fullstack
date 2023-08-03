const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

const router = require("./database/style/style");

app.use("/style", router);

const style = {
  nav: require("./database/style/nav/style.json"),
  banner: require("./database/style/banner/style.json"),
  section: require("./database/style/section/style.json"),
  footer: require("./database/style/footer/style.json"),
  card: require("./database/style/card/style.json"),
};
const db = require("./database/db.json");
const img = require("./database/img.json");

app
  .route(/footer/, (req, res) => {
    const id = req.params.id;
  })
  .get((req, res) => {
    res.json(style.footer);
  });

app
  .route(/section/, (req, res) => {
    const id = req.params.id;
    console.log(id);
  })
  .get((req, res) => {
    res.json(style.section);
  });

app.route(/banner/).get((req, res) => {
  res.json(style.banner);
});

app.route(/section/).get((req, res) => {
  res.json(style.section);
});

app
  .route("/db")
  .get((req, res) => {
    res.json(img);
  })
  .post((req, res) => {
    const created = { data: req.body };
    db.data = {
      id: new Date(),
      data: created.data,
    };
    res.status(201).json(created);
  });

app.route("/card").get((req, res) => {
  res.json(style.card);
});

app.listen(PORT, console.log("running"));
