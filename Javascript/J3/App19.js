var salary = {
  basu: 30000,
  Aman: 25000,
  Siddharth: 35000,
  Parvej: 450000,
};

var max = 0;

for (var person in salary) {
  if (salary[person] > max) {
    max = salary[person];
  }
}

console.log(max)
