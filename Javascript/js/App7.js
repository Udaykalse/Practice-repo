let numbers = [1, 3, 7, 8, 10];

let res = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    res = numbers[i];
    break
  }
}

console.log(res)
