let arr = [1, "str", null, 3, undefined, "p"];
let num = [];
for (let i = 0; i < arr.length; i++) {
  if ( typeof arr[i] == "number") {
    // num = num.push(arr[i]);
    num.push(arr[i]);
  }
}

console.log(num);
