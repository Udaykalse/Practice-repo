let arr = [1, ["a", "b"], 3, ["c", 4], ["d", [5]]];

let result = [];

function flatten(arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      result.push(item);
    }
  }
}

flatten(arr);
console.log(result);
