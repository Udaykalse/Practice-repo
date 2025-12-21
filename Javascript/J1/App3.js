let arr = [3, 7, 1, 9, 5];

let Large_num = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > Large_num) {
    Large_num = arr[i];
  }
}

console.log("Largest Number In Array is :- ", Large_num);
