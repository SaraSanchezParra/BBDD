const {Router} = require ("express");
const router = Router();
const studentsCtrl = require("../controller/students.controller");

router.get("/", studentsCtrl.getStart);
router.get("/students/:id", studentsCtrl.getStudent);
router.get("/students", studentsCtrl.getStudent);
router.post("/students", studentsCtrl.postStudent);
router.put("/students/:id", studentsCtrl.putStudent);
router.delete("/students/:id", studentsCtrl.deleteStudent);

module.exports = router;