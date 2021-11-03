"use strict";
require("dotenv").config({ path: ".env.local" });
const { PORT, HOSTNAME } = process.env;
const express = require("express");
const cors = require("cors");

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
app.use("/survey", require("./src/routes/survey"));
app.use("/condition", require("./src/routes/condition"));
app.use("/uploads", express.static("uploads"));

// app.use(morgan("dev"));

app.listen(PORT, HOSTNAME, () => {
  console.log(`\r
    Server running at 
    >>> http://${HOSTNAME}:${PORT} and ...
    `);
});

// 클라이언트에서 요청해서 가져와라

// const sql = require('./sql.js');

// app.post('/api/possible', async (request, res) => {
// try{
// res.send(await req.db(requst.params.possible))
// }catch(err){
//     res.status(500).send({
//         error:err
//     })
// }
// });

// const req = {
//     async db(possible, param = [], where = '') {
//       return new Promise((resolve, reject) => dbPool.query(sql[possible].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != 'ER_DUP_ENTRY')
//             console.log(error);
//           resolve({
//             error
//           });
//         } else resolve(rows);
//       }));
