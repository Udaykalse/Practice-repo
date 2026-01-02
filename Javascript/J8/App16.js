let arr = [1, 2, 3, 4, 5];

let x = 4;

for (var i = 0; i, arr.length; i++) {
  if (arr[i] === x) {
    return console.log(arr.indexOf(arr[i]));
  }
}
