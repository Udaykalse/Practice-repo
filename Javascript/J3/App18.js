var marks = {
  math: 80,
  science: 70,
  Marathi: 90,
};

var total = 0;

for (var subject in marks) {
  total = total + marks[subject];
}

console.log(total);
