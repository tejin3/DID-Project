"use stirct";
const express = require("express");
const router = express.Router();
const sys = require("../config/db");

router.post("/test", (req, res) => {
    // console.log(req.originalUrl);
    // console.log(req._parsedUrl);
    console.log(req.body.param);
    res.send({ success: "ok" });
});

// sql로 고고
router.post("/:alias", async (req, res) => {
    console.log(req.params.alias);
    console.log(req.body.param);

    try {
        res.send(
            await sys.db(req.params.alias, req.body.param, req.body.where)
        );
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
});

// 업로드   '/:이름' -> '이름' 을 파라미터 삼을 수 있다.
router.post("/upload/:type/:fileName", async (req, res) => {
    // 데이터가 없는 경우
    if (!request.body.data)
        return fs.unlink(file, (err) =>
            res.send({
                err,
            })
        );

    let { type, fileName } = request.params;
    const dir = `${__dirname}/uploads/${type}`;
    const file = `${dir}/${fileName}`;

    //그런 폴더가가 없으면 폴더를 만들어
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    const data = request.body.data.slice(
        request.body.data.indexOf(";base64,") + 8
    );

    //스트링 데이터 형태로 들어온 이미지 파일을 다시 이미지로 변환
    fs.writeFile(file, data, "base64", async (error) => {
        await sys.db("testImgUp", [
            {
                type: type,
                path: fileName,
            },
        ]);
        if (error) {
            res.send({
                error,
            });
        } else {
            res.send("file upload ok");
        }
    });
});

module.exports = router;
