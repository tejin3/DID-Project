"use strict";
const mysql = require("../config/mysql");

const store = async (req, res) => {
    console.log(req.body.param[0]);
    const surveyId = req.body.param[0];

    try {
        const results = await mysql.query("getQuestions", surveyId);
        console.table(results);
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }

    // 평가지 생성 페이지, 질문 리스트 저장
app.post("/api/saveQuestion", async (req, res) => {
    console.log(req);
    console.log(req.body.param);
    console.log("/api/saveQuestion");

    try {
        for (const question of req.body.param[0]) {
            await sys.db("insertQuestion", {
                eval_id: question.eval_id,
                class_id: question.class_id,
                order: question.order,
                type: question.type,
                content: question.content,
            });
        }

        res.status(200).send("Ok");
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
});
};

module.exports = { store };
