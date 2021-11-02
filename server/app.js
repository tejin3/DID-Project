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
// app.use("/", require("./src/routes"));
app.use("/paper", require("./src/routes/paper"));
app.use("/uploads", express.static("uploads"));

// app.use(morgan("dev"));
app.use("/surveys", require("./src/routes/surveys"));

app.listen(PORT, HOSTNAME, () => {
    console.log(`\r
    Server running at 
    >>> http://${HOSTNAME}:${PORT} and ...
    `);
});
