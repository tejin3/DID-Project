"use stirct";

const router = require("express").Router();
const mysql = require("../config/mysql");

router.get("/data", async (req, res) => {
  // localhost:3000/members 접속 시 실행
  const members = await mysql.query("getSurvey"); //sql.js 파일에 작성된 memberList 쿼리를 실행
  console.log(members);
  res.send(members); // 결과를 클라이언트로 보냄
});

router.get("/test", async (req, res) => {
  // localhost:3000/members 접속 시 실행
  const members = await mysql.query("getTest"); //sql.js 파일에 작성된 memberList 쿼리를 실행
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
