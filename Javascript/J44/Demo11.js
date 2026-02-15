let arr = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 0];
let even = 0,
  odd = 0;
for (let num of arr) {
  if (num % 2 === 0) even++;
  else odd++;
}

console.log("Even :- ", even, "Odd :- ", odd);
