let person = { name: "Uday", age: 25, city: "Pune" };

function checkPro(obj,prop){
    return obj.hasOwnProperty(prop)

}

let hasAge=checkPro(person,'age');
console.log(hasAge)