"use strict";
const mysql = require("../config/mysql");

const showById = async (req, res) => {
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
};

module.exports = { showById };
