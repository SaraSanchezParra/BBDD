const {Router} = require ("express");
const router = Router();
const studentsCtrl = require("../controller/students.controller");

router.get("/alumnos", studentsCtrl.getStudent)