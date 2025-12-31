let unique = ["a", "b", "a", "g", "p", "n", "t", "g", "u", "x", "x"];

function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique(unique));
