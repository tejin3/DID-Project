"use strict";
const mysql = require("../config/mysql");

const store = async (req, res) => {
    console.log(req);
    console.log(req.body.param);
    // const answers = req.body.param[0].answers;
    const answers = req.body.param.answers;
    console.log("answers", answers);

    try {
        console.log("나 try 들어왔어");
        for (let answer of answers) {
            console.log("for문까지들어왔는데?", answer);
            await mysql.query("insertAnswer", {
                question_id: answer.questionsId,
                answer_value: answer.answerValue,
            });
        }
        res.status(200).send({ message: "success" });
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

module.exports = { store };
