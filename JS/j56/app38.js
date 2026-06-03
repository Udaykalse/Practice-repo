let arr=[10,20,30,40];

let largest=-Infinity;
let second=-Infinity;

for(let num of arr){

    if(num>largest){
        second=largest;
        largest=num;
    }
    else if(num>second && num!==largest){
        second=num;
    }
}

console.log(second);