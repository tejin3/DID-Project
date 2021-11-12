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

// app.use(morgan("dev"));

app.listen(PORT, HOSTNAME, () => {
  console.log(`\r
    Server running at 
    >>> http://${HOSTNAME}:${PORT} and ...
    `);
});
