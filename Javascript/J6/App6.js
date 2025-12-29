let marks = [45, 67, 32, 89];

let failed = false;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 40) {
    failed = true;
    break;
  }
}

console.log(failed);

let failedStd = marks.some((mark) => mark < 40);
console.log(failedStd);
