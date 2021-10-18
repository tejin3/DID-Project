"use stirct";
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
// const sys = require("../config/db");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let { type } = req.params;
        console.log(type);
        let dir = process.cwd() + "/uploads/" + type;
        // 폴더 생성
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);

        cb(null, `uploads/${type}`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

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

module.exports = router;
