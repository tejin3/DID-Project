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

const showUser = async (req, res) => {
  try {
    const results = await mysql.query("getUser");
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

const exchangeGoods = async (req, res) => {
  /*   console.log(req.body.param); */
  const exchange = req.body.param;
  try {
    await mysql.query("exchangeGoods", [
      exchange.user_coupon,
      exchange.user_account,
      exchange.goods_id,
    ]);
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = { showGoods, exchangeGoods, showUser };
