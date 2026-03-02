function arrToObj(arr) {
  let obj = {};
  for (let [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}

console.log(arrToObj([["a",1],["b",2]]));