let arr = ["a", "b", "c", "d", "a", "c"];

let uniqueChar = [];

for (var i = 0; i < arr.length; i++) {
  if (uniqueChar.indexOf(arr[i]) === -1) {
    uniqueChar.push(arr[i]);
  }
}

console.log(uniqueChar)