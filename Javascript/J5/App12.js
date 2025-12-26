var arr = ["a", "b", "c", "a", "d", "a"];

var unique = [];

for (var i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}

console.log(unique);
