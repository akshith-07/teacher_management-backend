const teacherModel = require("../models/teacherModel");

const validateTeacherName = async (request, response) => {
  const teacherToBeValidated = request.body.fullName;

  try {
    const validTeacher = await teacherModel.findOne({
      fullName: teacherToBeValidated,
    });
    if (validTeacher) {
      return response.status(200).json(validTeacher);
    }
    response.status(400).json({ message: "Invalid Teacher Name..." });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = { validateTeacherName };
