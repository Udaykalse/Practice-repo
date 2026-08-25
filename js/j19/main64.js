function removeFalsy(arr) {
  let result = [];
  for (let x of arr) {
    if (x) result.push(x);
  }
  return result;
}

console.log(removeFalsy([0,1,false,2,"",3,null]));