let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let array = [...arr1, ...arr2];
let arr = [];
for (let i = 0; i < arr1.length; i++) {
  arr.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  arr.push(arr2[i]);
}

console.log(arr);
console.log(array);
