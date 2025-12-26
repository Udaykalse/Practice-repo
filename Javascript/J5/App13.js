var arr = ["a", "b", "c", "a", "d", "a"];

var unique = [];

for (var i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}
console.log(unique)
