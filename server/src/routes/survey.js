"use stirct";

const router = require("express").Router();
const mysql = require("../config/mysql");

router.get("/", async (req, res) => {
    try {
        // const result = await sys.db("confirm", req.body.param[0]);
        const surveys = await mysql.query("getSurvey");
        console.table(surveys);
        res.send(surveys);
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
});

module.exports = router;
