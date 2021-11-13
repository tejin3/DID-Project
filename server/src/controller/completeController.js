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

const saveCompletePeople = async (req, res) => {
  /*   console.log(req.body.param); */

  console.log(req.body.param);
  try {
    await mysql.query("insertCompletePeople", req.body.param);
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

const saveReward = async (req, res) => {
  /*   console.log(req.body.param); */
  const reward = req.body.param;
  try {
    await mysql.query("updateReward", [
      reward.point,
      reward.coupon,
      reward.account,
    ]);
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = { index, saveReward, saveCompletePeople };
