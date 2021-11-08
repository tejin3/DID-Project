"use stirct";

const router = require("express").Router();
// const app = require("express");

const mysql = require("../config/mysql");

router.post("/data", async (req, res) => {
  console.log("here000");
  // console.log(req);
  console.log(req.body.param);
  console.log(req.body.param[0]);
  try {
    const members = await mysql.query("getSurvey1", req.body.param[0]);
    res.status(200).send(members);
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
  // const members = await mysql.query("getSurvey1"); //sql.js 파일에 작성된 memberList 쿼리를 실행
  // console.log(members);
  // res.send(members); // 결과를 클라이언트로 보냄
});

router.get("/completepeople", async (req, res) => {
  // localhost:3000/members 접속 시 실행
  const members = await mysql.query("getCompletePeople"); //sql.js 파일에 작성된 memberList 쿼리를 실행
  console.log(members);
  res.send(members); // 결과를 클라이언트로 보냄
});

router.get("/testvc", async (req, res) => {
  // localhost:3000/members 접속 시 실행
  const members = await mysql.query("getTestVc"); //sql.js 파일에 작성된 memberList 쿼리를 실행
  console.log(members);
  res.send(members); // 결과를 클라이언트로 보냄
});

module.exports = router;
