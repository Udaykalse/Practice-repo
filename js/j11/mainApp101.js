const arr = [12, 35, 45, 2, 76, 34];
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log("Smallest :- ", smallest);
