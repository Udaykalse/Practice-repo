let marks = [35, 78, 42, 20, 90];

console.log("Traditional Way");

let passed = [];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    passed.push(marks[i]);
  }
}

console.log(passed);
console.log("----------------------------------");

console.log("Modern Way");

let passedStd = marks.filter((mark) => mark >= 40);

console.log(passedStd);
