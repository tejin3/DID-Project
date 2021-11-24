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

const showUsers = async (req, res) => {
  try {
    const results = await mysql.query("getUser");
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

const showUser = async (req, res) => {
  const userAccount = req.body.param;
  console.log(userAccount);
  try {
    const results = await mysql.query("getUserByAccount", userAccount);
    console.log(results);
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

const subtractCoupon = async (req, res) => {
  const coupon = req.body.param;
  try {
    await mysql.query("subtractCoupon", [coupon.coupon, coupon.account]);
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = {
  showGoods,
  exchangeGoods,
  subtractCoupon,
  showUsers,
  showUser,
};
