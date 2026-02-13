let arr = [2, 4, 5, 61, 1, 0];

let larget = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > larget) {
    larget = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondLargest && arr[i] !== larget) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest);
