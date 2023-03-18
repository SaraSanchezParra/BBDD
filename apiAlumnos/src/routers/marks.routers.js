const {Router} = require ("express");
const router = Router();
const marksCtrl = require("../controller/marks.controller");

router.get("/", marksCtrl.getStart);
router.get("./", marksCtrl.getMarksAvg);
router.post("", marksCtrl.getMarksNameLast);
router.put("", marksCtrl.getMarksNameLastTeacher);
router.delete("", marksCtrl.getMarksTeacher);
router.delete("", marksCtrl.getMarksTitle);

module.exports = router;