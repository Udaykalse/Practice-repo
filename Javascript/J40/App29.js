let person = { name: "Uday", age: 25, city: "Pune" };
let extraInfo = { profession: "Developer" };


function mereObj(obj1,obj2){
    return Object.assign({},obj1,obj2)
}

let mereged=mereObj(person,extraInfo);
console.log(mereged)