const numbers = [10, 5, 8, 25, 15, 20];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
    secondLargest = numbers[i];
  }
}

console.log(secondLargest)