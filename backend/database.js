const knex_db = require("./db-config");
const testBase = require("./testBase"); // Make sure you have this file for DB reset

// -------------------- DB Initialization --------------------
const dbinitialize = async () => {
  try {
    await testBase.resetDatabase(knex_db);
    return { message: "Database initialized successfully" };
  } catch (err) {
    console.error("DB Initialization Error:", err);
    throw err;
  }
};

// -------------------- Teacher CRUD --------------------

// Read all teachers
const readTeachers = async () => {
  return await knex_db("teacher").select("*");
};

// Read single teacher info
const readTeacherInfo = async (id) => {
  return await knex_db("teacher").where({ id }).first();
};

// Add a teacher
const addTeacher = async (id, name, age) => {
  await knex_db("teacher").insert({ id, name, age });
  return { message: "Teacher added successfully" };
};

// Update a teacher
const updateTeacher = async (name, age, id) => {
  await knex_db("teacher").where({ id }).update({ name, age });
  return { message: "Teacher updated successfully" };
};

// Delete a teacher
const deleteTeacher = async (id) => {
  await knex_db("teacher").where({ id }).del();
  return { message: "Teacher deleted successfully" };
};

// -------------------- Student CRUD --------------------

// Read all students
const readStudents = async () => {
  return await knex_db("student").select("*");
};

// Read single student info
const readStudentInfo = async (id) => {
  return await knex_db("student").where({ id }).first();
};

// Add a student
const addStudent = async (id, name, age, hometown) => {
  await knex_db("student").insert({ id, name, age, hometown });
  return { message: "Student added successfully" };
};

// Update a student
const updateStudent = async (name, age, hometown, id) => {
  await knex_db("student").where({ id }).update({ name, age, hometown });
  return { message: "Student updated successfully" };
};

// Delete a student
const deleteStudent = async (id) => {
  await knex_db("student").where({ id }).del();
  return { message: "Student deleted successfully" };
};

// -------------------- Exports --------------------
module.exports = {
  dbinitialize,
  readTeachers,
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
  readStudentInfo,
  readTeacherInfo,
  updateStudent,
  updateTeacher,
};
