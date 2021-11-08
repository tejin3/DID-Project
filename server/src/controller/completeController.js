"use strict";
const mysql = require("../config/mysql");

const index = async (req, res) => {
    try {
        const results = await mysql.query("getCompletePeople");
        console.table(results);
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
};

module.exports = { index };
