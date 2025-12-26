let arr = ["a", "b", "c", "d", "a", "c"];

let uniqueChar = [];
for (var i = 0; i < arr.length; i++) {
  if (!uniqueChar.includes(arr[i])) {
    uniqueChar.push(arr[i]);
  }
}

console.log(uniqueChar);

// let uniqueChar=new Set(arr);
