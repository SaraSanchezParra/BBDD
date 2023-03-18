const {Router} = require ("express");
const router = Router();
const studentsCtrl = require("../controller/students.controller");

router.get("/", studentsCtrl.getStart);
router.get("", studentsCtrl.getStudent);
router.post("", studentsCtrl.postStudent);
router.put("", studentsCtrl.putStudent);
router.delete("", studentsCtrl.deleteStudent);

module.exports = router;