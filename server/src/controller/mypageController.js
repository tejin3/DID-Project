"use strict";
const mysql = require("../config/mysql");

const showUserGoods = async (req, res) => {
  try {
    const results = await mysql.query("getUserGoods");
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = { showUserGoods };
