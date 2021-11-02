"use stirct";

const router = require("express").Router();
const upload = require("../middleware/upload");

// router.post("/signUp", upload.single("profile"), home_ctrl.process.signUp);
router.post("/upload/:type", upload.single("attachment"), (req, res) => {
    // console.log("here");
    // console.log(req.body);

    res.send({ success: "ok" });
});

router.post("/test", (req, res) => {
    // console.log(req.originalUrl);
    // console.log(req._parsedUrl);
    console.log(req.body.param);
    res.send({ success: "ok" });
});

router.get("/search", async (req, res) => {
    // localhost:3000/members 접속 시 실행
    // const members = await mysql.query('memberList'); //sql.js 파일에 작성된 memberList 쿼리를 실행
    // console.log(members);
    const members = [
        {
            name: "Jeremy",
            email: "jeremy@email.com",
        },
        {
            name: "John Doe",
            email: "john@email.com",
        },
    ];
    res.send(members); // 결과를 클라이언트로 보냄
});

// 멤버 정보 추가 라우터
router.post("/insert", async (req, res) => {
    console.log(req.body);
    const result = await mysql.query("memberInsert", req.body.param);
    res.send(result); // 결과를 클라이언트로 보냄
});

// 멤버 정보 수정 라우터
router.put("/update", async (req, res) => {
    console.log(req.body);
    const result = await mysql.query("memberUpdate", req.body.param);
    res.send(result); // 결과를 클라이언트로 보냄
});

// 멤버 정보 삭제 라우터
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params; // 라우트 경로의 :id 에 맵핑되는 값
    const result = await mysql.query("memberDelete", id);
    res.send(result); // 결과를 클라이언트로 보냄
});

module.exports = router;
