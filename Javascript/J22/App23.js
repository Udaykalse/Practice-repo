let arr = [1, 2, [3, 4], 5, [6, [7, [8, [9, [0]]]]]];

let res = [];

function Flatten(arr) {
  for (let itM of arr) {
    if (Array.isArray(itM)) {
      Flatten(itM);
    } else {
      res.push(itM);
    }
  }
}

Flatten(arr);
console.log(res);
