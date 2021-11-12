"use strict";
const mysql = require("../config/mysql");

const store = async (req, res) => {
    console.log(req);
    console.log(req.body.param);
    const answers = req.body.param.answers;
    // const userAcccount = req.body.param[1].userAccount;
    // const questionId = req.body.param[2].questionId;

    try {
        for (let answer of answers) {
            console.log(answer);
            await mysql.query("insertAnswer", {
                question_id: answer.questionId,
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
