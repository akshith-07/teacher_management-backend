const express = require("express");
const router = express.Router();
const {
  addNewTeacher,
  displayAllTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teachersController");
const { validateTeacherName } = require("../controllers/validationController");
console.log(addNewTeacher);
console.log(validateTeacherName);

router
  .route("/")
  .post(addNewTeacher)
  .get(displayAllTeachers)
  .patch(updateTeacher)
  .delete(deleteTeacher);
router.route("/validate").post(validateTeacherName);

module.exports = router;
