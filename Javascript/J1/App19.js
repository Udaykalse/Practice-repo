let arr = [1, 2, 3, 4, 5, 6];
let evens = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) evens.push(arr[i]);
}

console.log("Even Numbers :-", evens);
