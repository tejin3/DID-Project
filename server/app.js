"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env.local") });
const cors = require("cors");

// options
const corsOption = {
    origin: "http://localhost:8080",
    credentials: true,
};

const router = require("./routes");

// 서버생성
const app = express();

// 서버 기능추가
app.use(cors(corsOption));
// 라우터 사용

// Parse JSON bodies (as sent by API clients)
app.use(
    express.json({
        limit: "50mb",
    })
);

app.use("/", router);
// Use token as middlewareadssaassds
// app.use(function (req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//     );
//     console.log(__dirname);
//     next();
// });
module.exports = app;
