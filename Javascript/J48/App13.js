function getType(value) {
  if (value === null) return "null";
  if(Array.isArray(value)) return 'Array'
  return typeof value
}


console.log(getType(null));    // 'null'
console.log(getType([]));      // 'array'
console.log(getType({}));      // 'object'
console.log(getType(42));  