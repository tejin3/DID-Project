"use strict";
const mysql = require("../config/mysql");

const index = async (req, res) => {
  try {
    const results = await mysql.query("getCompletePeople");
    console.table(results);
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

const save = async (req, res) => {
  console.log(req);
  console.log(req.body.param);
  const reward = req.body.param;
  try {
    await mysql.query("insertReward", {
      user_point: reward.point,
      user_coupon: reward.coupon,
    });
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = { index, save };
