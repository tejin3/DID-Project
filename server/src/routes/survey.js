"use stirct";

const router = require("express").Router();
const mysql = require("../config/mysql");

router.get("/search", (req, res) => {
    // localhost:3000/members 접속 시 실행
    // const members = await mysql.query("memberList"); //sql.js 파일에 작성된 memberList 쿼리를 실행
    // console.log(members);
    // const members = [
    //     {
    //         name: "Jeremy",
    //         email: "jeremy@email.com",
    //     },
    //     {
    //         name: "John Doe",
    //         email: "john@email.com",
    //     },
    // ];
    res.send("test"); // 결과를 클라이언트로 보냄
});

module.exports = router;
