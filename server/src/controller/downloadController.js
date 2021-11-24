"use strict";

const fs = require("fs");
const multer = require("multer");
const util = require("util");

const upload = multer({ dest: process.cwd() + "/uploads/" });
const { uploadFile, getFile } = require("../middleware/s3");
const unlinkFile = util.promisify(fs.unlink);

const index = async (req, res) => {
    const fileName = req.params.fileName;
    console.log(fileName);
    const readStream = getFile(fileName);

    readStream.pipe(res);
};

const store = (req, res, next) => {
    console.log("store");
    // Remember, the middleware will call it's next function
    // so we can inject our controller manually as the next()
    upload.single("attachment")(req, res, async () => {
        const file = req.file;
        const description = req.body.description;

        console.log("file", file);
        console.log("des", description);

        // apply
        // 파일을 서버에 맞게 조정
        // resize (700, 300) (600, 450)
        // 파일의 사이즈를 줄이기
        // img(src (500, 500))

        const result = await uploadFile(file);
        await unlinkFile(file.path);

        console.log(result);

        res.status(200).send({ message: "success!" });
    });
};

const index2 = (request, res) => {
    const { fileName } = request.params;
    // const filepath = `${__dirname}/../../uploads/${fileName}`;

    res.header(
        "Content-Type",
        `image/${fileName.substring(fileName.lastIndexOf("."))}`
    );
    // console.log("after", res.header());
    // 'content-type': [ 'Content-Type', 'image/.jpg' ]

    if (!fs.existsSync(filepath))
        res.send(404, {
            error: "Can not found file.",
        });
    else {
        //파일을 클라이언트에 내려주는것
        fs.createReadStream(filepath).pipe(res);
    }
};

module.exports = { index, store };
