function deepCLon(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for(let key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
        copy[key] = deepCLon(obj[key]);
    }
  }
  return copy
}


const original = {name:"Amey",details:{age:23,skills:["python","Java"]}}
const cloned = deepCLon(original)
cloned.details.age=25


console.log(original.details.age)
console.log(cloned.details.age)
