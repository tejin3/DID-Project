"use strict";
const mysql = require("../config/mysql");

const showGoods = async (req, res) => {
  try {
    // const result = await sys.db("confirm", req.body.param[0]);
    const results = await mysql.query("getGoods");
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = { showGoods };
