"use stirct";
const express = require("express");
const router = express.Router();

router.get("/", home_ctrl.output.index);

module.exports = router;
