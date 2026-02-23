// Move all zeros to end
let arr = [1, 0, 2, 0, 3, 0];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[index] = arr[i];
    index++;
  }
}

// here op :- [ 1, 2, 3, 0, 3, 0 ] why ?

for (let i = index; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);
// [1,2,3,0,0,0]
