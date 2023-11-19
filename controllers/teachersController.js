const teacherModel = require("../models/teacherModel");
const initialData = require("../data/initialTeacherData");

const addNewTeacher = async (request, response) => {
  const newTeacher = request.body;
  try {
    const existingTeacher = await teacherModel.findOne({
      fullName: newTeacher.fullName,
    });
    if (existingTeacher) {
      return response
        .status(409)
        .json({ message: "Teacher with the same name already exists." });
    }
    const teacher = await teacherModel.create(newTeacher);
    response.status(201).json(teacher);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const displayAllTeachers = async (request, response) => {
  try {
    const allTeachers = await teacherModel.find();
    if (allTeachers.length === 0) {
      const initialTeachers = await teacherModel.insertMany(initialData);
    }
    response.status(200).json(allTeachers);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const updateTeacher = async (request, response) => {
  const teacherToBeUpdated = request.body;
  try {
    const updatedTeacher = await teacherModel.updateMany(
      { fullName: teacherToBeUpdated.fullName },
      teacherToBeUpdated
    );
    response.status(200).json(updatedTeacher);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const deleteTeacher = async (request, response) => {
  const teacherToBeDeleted = request.body;
  try {
    const deletedTeacher = await teacherModel.deleteOne({
      fullName: teacherToBeDeleted.fullName,
    });
    response.status(200).json(deletedTeacher);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  addNewTeacher,
  displayAllTeachers,
  updateTeacher,
  deleteTeacher,
};
