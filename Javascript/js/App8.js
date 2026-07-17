let marks = [55, 78, 35, 90];

let index = -1;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 40) {
    index = i;
    break;
  }
}

console.log(index)
