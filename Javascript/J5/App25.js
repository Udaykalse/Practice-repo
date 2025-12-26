let arr = [1, 2, 3, "a", 5];
let Addition = [];
for (var i = 0; i < arr.length; i++) {
  if (Number(arr[i])) {
    Addition.push(arr[i]);
  }
}
console.log(
  Addition,
  Addition.reduce((a, b) => a + b, 0)
);
