const router = require("express").Router();
const conditionController = require("../controller/conditionController");
const upload = require("../middleware/upload");

// find all conditions
router.get("/", conditionController.index);

router.post("/store", conditionController.store);
// router.post("/store", upload.single("avatar"), paperController.store);
// 만약 업로드할 파일이 여러개인 경우
// router.post("/store", upload.array("avatar[]"), paperController.store);
router.post("/update", conditionController.update);
router.post("/delete", conditionController.destroy);

module.exports = router;
