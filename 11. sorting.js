const students = [
  { name: 'Alice', grades: [85, 90, 78] },
  { name: 'Bob', grades: [92, 88, 91] },
  { name: 'Charlie', grades: [79, 85, 87] },
  { name: 'Diana', grades: [95, 91, 89] },
];

function sortStudentsByAverageGrade(students) {
  return students.sort((a, b) => {
    const averageA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const averageB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return averageB - averageA;
  });
}

const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);
