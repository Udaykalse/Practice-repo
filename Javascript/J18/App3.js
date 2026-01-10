let marks = [55, 80, 45, 90, 72];

function getTopStudent(marks) {
  const studentsWithMoreThan70 = marks.filter(function (score) {
    return score > 70;
  });

  return studentsWithMoreThan70;
}

console.log(
  `All student Marks :- ${marks} Filter out students who scored more than 70. :- ${getTopStudent(
    marks
  )}`
);
