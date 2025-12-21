let arr = [3, 7, 1, 9, 5];

let smallest_Num = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest_Num) {
    smallest_Num = arr[i];
  }
}

console.log("Smallest number:", smallest_Num);
