require("dotenv").config({ path: ".env.local" });

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const upload = multer({ dest: "uploads/test/" });

const { uploadFile, getFile } = require("./s3");

const app = express();

// var AWS = require("aws-sdk");
// AWS.config.region = "ap-northeast-2";

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.get("/", function (req, res) {
    var output = `
<html>
<body>
    <form enctype="multipart/form-data" method="post" action="/uploadImage">
        <input type="file" name="attachment">
        <input type="submit">
    </form>

    <div>
    <img src="/images/ethereum.png"></img>
    <img src="/images/bitcoin-2647432_1280.png"></img>
    </div>

    
</body>
</html>
    `;
    res.send(output);
});

app.get("/images/:key", async (req, res) => {
    const key = req.params.key;
    const readStream = getFile(key);

    readStream.pipe(res);
});

app.post("/uploadImage", upload.single("attachment"), async (req, res) => {
    const file = req.file;
    console.log(file);

    // apply
    // resize

    const result = await uploadFile(file);
    await unlinkFile(file.path);

    console.log(result);

    const description = req.body;
    res.send("ok!");
});

app.listen(5000, function () {
    console.log("Connected");
});
