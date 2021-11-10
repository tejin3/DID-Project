"use strict";

// const mysql = require("../config/mysql");
const fs = require("fs");

const index = (request, res) => {
    // console.log("download", request.params);
    const { fileName } = request.params;
    // console.log({ fileName });
    // console.log({ __dirname });
    const filepath = `${__dirname}/../../uploads/${fileName}`;
    // console.log(filepath);
    // console.log("before", res.header());
    res.header(
        "Content-Type",
        `image/${fileName.substring(fileName.lastIndexOf("."))}`
    );
    // console.log("after", res.header());
    // 'content-type': [ 'Content-Type', 'image/.jpg' ]

    // console.log("res", res.header());
    if (!fs.existsSync(filepath))
        res.send(404, {
            error: "Can not found file.",
        });
    else {
        //파일을 클라이언트에 내려주는것
        // console.log("1", fs);
        // 오류 파라미터가 있어야 됨 console.log("2", fs.createReadStream());
        // console.log("3", fs.createReadStream(filepath));
        // 오류 파라미터가 있어야 됨 console.log("4", fs.createReadStream(filepath).pipe());
        // console.log("5", res);
        // console.log("6", fs.createReadStream(filepath).pipe(res));
        fs.createReadStream(filepath).pipe(res);
    }
};

module.exports = { index };
