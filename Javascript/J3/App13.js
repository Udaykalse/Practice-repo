var marks = {
  math: 46,
  Marathi: 70,
  Sciece: 78,
};

var count = 0;

for (var key in marks) {
  if (marks[key] > 50) {
    count++;
  }
}

console.log(count)