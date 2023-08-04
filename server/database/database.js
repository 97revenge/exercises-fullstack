const style = require("./style/style");
const express = require("express");
const router = express.Router();
const app = express();

router.use("/style", style);




module.exports = router;
