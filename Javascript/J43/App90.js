let arr = [1, 2, 3, 4, 5];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log(secondLargest)