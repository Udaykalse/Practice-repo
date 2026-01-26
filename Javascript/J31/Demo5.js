let arr = [1, 2, 3, 4, 5];
let larg = -Infinity;
let small = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > larg) {
    small = larg;
    larg = arr[i];
  } else if (arr[i] > small && arr[i] !== larg) {
    small = arr[i];
  }
}

console.log(small)