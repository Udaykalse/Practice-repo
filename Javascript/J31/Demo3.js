let arr = [1, 2, 3, 4, 5];

let largest = -1;
let smallest = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    smallest = largest;
    largest = arr[i];
  } else if (arr[i] > smallest && arr[i] !== largest) {
    smallest = arr[i];
  }
}

console.log(smallest);
