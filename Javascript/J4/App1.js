var marks = {
  Marathi: 60,
  Physics: 65,
  Math: 49,
};

let count = 0;
for (var key in marks) {
  if (marks[key] > 50) {
    count++;
  }
}

console.log(count)