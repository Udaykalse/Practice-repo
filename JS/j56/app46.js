let str="javascript";

let obj={};

for(let ch of str){
    obj[ch]=(obj[ch]||0)+1;
}

let max=0;
let result="";

for(let key in obj){
    if(obj[key]>max){
        max=obj[key];
        result=key;
    }
}

console.log(result);