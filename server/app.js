"use strict";
require("dotenv").config({ path: ".env.local" });
const { PORT, HOSTNAME } = process.env;
const express = require("express");
const cors = require("cors");
// const fs = require("fs");

// options
const corsOption = {
  origin: "http://localhost:8080",
  credentials: true,
};

const app = express();

// cors setting
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true })); // default is true
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use("/", require("./src/routes"));
app.use("/uploads", express.static("uploads"));

app.use("/surveys", require("./src/routes/surveys"));

// app.use(morgan("dev"));

app.listen(PORT, HOSTNAME, () => {
  console.log(`\r
    Server running at 
    >>> http://${HOSTNAME}:${PORT} and ...
    `);
});

// app.get("/download/:fileName", (request, res) => {
//   console.log("download", request.params);
//   const { fileName } = request.params;
//   console.log({ fileName });
//   const filepath = `${__dirname}/uploads/${fileName}`;
//   console.log(filepath);
//   res.header(
//     "Content-Type",
//     `image/${fileName.substring(fileName.lastIndexOf("."))}`
//   );
//   // console.log("res", res.header());
//   if (!fs.existsSync(filepath))
//     res.send(404, {
//       error: "Can not found file.",
//     });
//   else {
//     //파일을 클라이언트에 내려주는것
//     fs.createReadStream(filepath).pipe(res);
//   }
// });
