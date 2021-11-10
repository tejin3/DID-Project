"use stirct";
const router = require("express").Router();

// 각 컨트롤러 선언
const conditionController = require("../controller/conditionController");
const surveyController = require("../controller/surveryController");
const completeController = require("../controller/completeController");
const questionController = require("../controller/questionController");
const answerController = require("../controller/answerController");
const downloadController = require("../controller/downloadController");

const upload = require("../middleware/upload");

// 설문지 조건 controller
router.get("/conditions", conditionController.index);
router.post("/condition", conditionController.show);
// router.post("/condition", conditionController.company);

// 설문지 조건 업데이트, 삭제 - 미구현
// router.post("/update", conditionController.update);
// router.post("/store", conditionController.store);
// router.post("/delete", conditionController.destroy);

// 설문지 controller
router.get("/surveys", surveyController.index);
router.post("/survey", surveyController.showById);
router.post("/survey/company", surveyController.showByAddress);
router.get("/date", surveyController.showDday);

// 완료된 사람 controller
router.get("/completes", completeController.index);

// question controller
router.post("/questions", questionController.showById);

// answer controller
router.post("/answers", answerController.store);

// img call
router.get("/download/:fileName", downloadController.index);
module.exports = router;
