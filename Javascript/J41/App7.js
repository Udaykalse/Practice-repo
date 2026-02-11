let arr = [2, 4, 5, 61, 1, 0];
// let ordered = [];
let second = -Infinity;
let larget = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > larget) {
    second = larget;
    larget = arr[i];
  } else if (arr[i] > second && arr[i] !== larget) {
    second = arr[i];
  }
}

console.log(second);
