
const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.get("/", Controller.getInfo);

module.exports = router;
