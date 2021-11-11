"use stirct";

// const path = require("path");
const multer = require("multer");
const fs = require("fs");

var storage = multer.diskStorage({
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

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
            callback(null, true);
        } else {
            console.log("only jpg & png file supported!");
            callback(null, false);
        }
    },
    limits: { fileSize: 1024 * 1024 * 2 },
});
