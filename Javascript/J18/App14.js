let marks = [45, 32, 67, 89];

function hasFailed(students) {
  //   const failedStudents = students.filter(function (mark) {

  const failedStudents = students.some(function (mark) {
    return mark < 35;
  });

  return failedStudents;
}

console.log(hasFailed(marks));
