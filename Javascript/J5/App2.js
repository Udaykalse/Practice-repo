var arr = [1, 2, 3, 4, "a", 5];

var charArr = [];
var numArr = [];
var sumArr = [];
var oddArr = [];

for (var i = 0; i < arr.length; i++) {
  if (Number(arr[i])) {
    numArr.push(arr[i]);
    if (arr[i] % 2 === 0) {
      sumArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  } else {
    charArr.push(arr[i]);
  }
}

console.log(
  `Number in Array :- ${numArr} | Characters :- ${charArr} | Even :- ${sumArr} | Odd :- ${oddArr}`
);
