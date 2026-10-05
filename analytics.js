// Find the average grade for a course.
export function calculateClassAverage(students, courseId) {
  const grades = students
    .flatMap((student) => student.courses)
    .filter((course) => course.courseId === courseId)
    .map((course) => course.grade);

  if (grades.length === 0) return 0;

  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

// Find the student with the highest average.
export function findTopStudent(students) {
  if (students.length === 0) return null;

  return students.reduce((topStudent, student) =>
    student.getAverage() > topStudent.getAverage() ? student : topStudent,
  );
}

// Return students that match the given rule.
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
