function objectToArray(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

console.log(objectToArray({name:"Uday", age:21}));