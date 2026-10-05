import Student from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents,
} from "./analytics.js";

console.log("Fetching data from database...");

fetchStudents((rawStudents) => {
  console.log("Data received!\n");

  const students = rawStudents.map(
    ({ id, name, courses }) => new Student(id, name, courses),
  );

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");

  try {
    students[0].id = 999;
  } catch {
    // The ID cannot be changed.
  }

  console.log(
    `Final ID: ${students[0].id} (Success: ID did not change)\n`,
  );

  const courseId = 101;
  const classAverage = calculateClassAverage(students, courseId);
  const topStudent = findTopStudent(students);
  const studentsInCourse = filterStudents(students, (student) =>
    student.courses.some((course) => course.courseId === 102),
  );

  console.log("--- Analytics Report ---");
  console.log(`Class Average for Course ${courseId}: ${classAverage.toFixed(2)}`);
  console.log(
    `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`,
  );
  console.log(
    `Students in Course 102: ${studentsInCourse
      .map((student) => student.name)
      .join(", ")}`,
  );
});
