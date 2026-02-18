let arr = [1, "1", "abc", null, 2, 0.5, -1, undefined, 2];

let good = [];
let bad = [];

for (let i = 0; i < arr.length; i++) {
  if (Number.isFinite(arr[i])) {
    good.push(arr[i]);
  } else {
    bad.push(arr[i]);
  }
}

console.log("Good :- ", good, " : ", "Bad :- ", bad);
