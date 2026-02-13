let arr = [2, 4, 5, 61, 1, 0];

let largest = -Infinity;
let smallest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    smallest = largest;
    largest = arr[i];
  } else if (arr[i] > smallest && arr[i] !== largest) {
    smallest = arr[i];
  }
}
console.log(smallest)