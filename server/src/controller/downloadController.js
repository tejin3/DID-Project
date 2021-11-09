"use strict";
// const mysql = require("../config/mysql");
const fs = require("fs");

const index = (request, res) => {
  console.log("download", request.params);
  const { fileName } = request.params;
  console.log({ fileName });
  console.log({ __dirname });
  const filepath = `${__dirname}/../../uploads/${fileName}`;
  console.log(filepath);
  res.header(
    "Content-Type",
    `image/${fileName.substring(fileName.lastIndexOf("."))}`
  );
  // console.log("res", res.header());
  if (!fs.existsSync(filepath))
    res.send(404, {
      error: "Can not found file.",
    });
  else {
    //파일을 클라이언트에 내려주는것
    fs.createReadStream(filepath).pipe(res);
  }
};

module.exports = { index };
