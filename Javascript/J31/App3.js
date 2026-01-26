let arr = [1, 2, 3, 2, 1, 4, 5, 4, 3];
let uni = [];
for (let i = 0; i < arr.length; i++) {
  if (!uni.includes(arr[i])) {
    uni.push(arr[i]);
  }
}
console.log(uni)