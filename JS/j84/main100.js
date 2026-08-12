const arr = [12, 35, 45, 2, 76, 34];

let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("Largest :- ", largest);
