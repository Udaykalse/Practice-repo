let student = [
  { name: "Parvej", Point: "A" },
  { name: "Siddharth", Point: "A" },
  { name: "Amey", Point: "A" },
  { name: "Sanmati", Point: "B" },
  { name: "Basuraj", Point: "B" },
  { name: "Anand", Point: "c" },
  { name: "Vansh", Point: "B" },
];

let result = {};

for (let i = 0; i < student.length; i++) {
  let g = student[i].Point;
  if (result[g]) {
    result[g]++;
  } else {
    result[g] = 1;
  }
}

console.log(result);
