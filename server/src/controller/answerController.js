"use strict";
const mysql = require("../config/mysql");

const store = async (req, res) => {
    const answers = req.body.param[0];

    try {
        for (const item of answers) {
            await mysql.query("insertAnswer", {
                answer_id: item.answerId,
                question_id: item.questionId,
                answer_value: item.answerValue,
                answer_account: item.answerAccount,
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
