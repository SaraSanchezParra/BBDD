const {Router} = require ("express");
const router = Router();
const marksCtrl = require("../controller/marks.controller");

router.get("/", marksCtrl.getStart);
router.get("/media/:id", marksCtrl.getMarksAvg);
router.get("/apuntadas/:id", marksCtrl.getMarksTitle);
router.get("/apuntadas", marksCtrl.getMarksNameLast);
router.get("/impartidas/:id", marksCtrl.getMarksTeacher);
router.get("/impartidas", marksCtrl.getMarksNameLastTeacher);



module.exports = router;