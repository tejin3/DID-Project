"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./.env" });

const corsOption = {
    origin: "http://localhost:8080",
    credentials: true,
};
// set routes
const router = require("./src/routes");
const publicDirectory = path.join(__dirname, "./src/public");

app.use(cors(corsOption));
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use token as middleware
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// Define Routes or Controller = middle ware
app.use("/", router);

module.exports = app;
