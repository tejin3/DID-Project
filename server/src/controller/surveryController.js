"use strict";
const mysql = require("../config/mysql");

const index = async (req, res) => {
    try {
        const results = await mysql.query("getSurveys");

        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

const showById = async (req, res) => {
    const surveyIds = req.body.param;
    const surveyLength = surveyIds.length;

    if (surveyLength === 1) {
        try {
            const results = await mysql.query("getSurveyById", surveyIds[0]);
            console.log(results);
            res.status(200).send(results);
        } catch (err) {
            res.status(500).send({
                error: err,
            });
        }
    } else {
        try {
            const results = await mysql.query("getSurveyByIds", [surveyIds]);

            res.status(200).send(results);
        } catch (err) {
            res.status(500).send({
                error: err,
            });
        }
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

const showDday = async (req, res) => {
    try {
        // const result = await sys.db("confirm", req.body.param[0]);
        const results = await mysql.query("discountDay");

        /*
        result => 
        [
             { dday: 19 },
             { dday: 15 },
             { dday: 32 },
             { dday: 14 },
             { dday: 17 },
             { dday: 26 }
        ]
        */
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

module.exports = { index, showById, showByAddress, showDday };
