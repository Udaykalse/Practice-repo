function fibonacci(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, num);
}

console.log(fibonacci(7));
