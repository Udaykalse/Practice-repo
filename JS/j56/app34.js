let str="hello";

let obj={};

for(let ch of str){
    obj[ch]=(obj[ch]||0)+1;
}

console.log(obj);