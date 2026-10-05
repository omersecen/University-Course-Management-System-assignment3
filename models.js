// A student and their courses.
export class Student {
  constructor(id, name, courses = []) {
    Object.defineProperty(this, "id", {
      value: id,
      enumerable: true,
      writable: false,
      configurable: false,
    });

    this.name = name;
    this.courses = courses.map(({ courseId, grade }) => ({ courseId, grade }));
  }

  // Add a course to the student.
  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  // Return the average grade.
  getAverage() {
    if (this.courses.length === 0) return 0;

    const total = this.courses.reduce((sum, course) => sum + course.grade, 0);
    return total / this.courses.length;
  }
}

export default Student;
