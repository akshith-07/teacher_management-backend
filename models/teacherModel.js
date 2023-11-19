const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    numOfClasses: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "teachers",
  }
);

module.exports = mongoose.model("teachers", teacherSchema);
