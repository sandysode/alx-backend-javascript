/**
 * Filter grades of the list of students based on given city.
 * @function
 * @param {{id: Number, firstName: String, location: String}
 * []} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Num,
 *   grade: Num,
 * }[]} newGrades - The ne grades.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const noGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades.filter((grade) => grade.studentId === student.id).pop() || noGrade).grade,
      }));
  }
  return [];
}
