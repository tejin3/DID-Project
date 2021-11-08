"use strict";
const mysql = require("../config/mysql");

const index = async (req, res) => {
    try {
        // const result = await sys.db("confirm", req.body.param[0]);
        const results = await mysql.query("getSurveys");
        console.table(results);
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

const showById = async (req, res) => {
    const surveyId = req.body.param[0];

    try {
        const results = await mysql.query("getSurveyById", surveyId);
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

const showByAddress = async (req, res) => {
    const companyAddress = req.body.param[0];

    try {
        const results = await mysql.query("getSurveyByCompany", companyAddress);
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

module.exports = { index, showById, showByAddress };
