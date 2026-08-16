const arr = [1, 2, 3, 4, 5];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let index = 0; index < arr.length; index++) {
  if (arr[index] < smallest) {
    secondSmallest = smallest;
    smallest = arr[index];
  } else if (arr[index] < secondSmallest && arr[index] !== smallest) {
    secondSmallest = arr[index];
  }
}

console.log("SMallest second :- ", secondSmallest);
