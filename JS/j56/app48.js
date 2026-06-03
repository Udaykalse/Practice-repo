let arr1=[1,2,3];
let arr2=[4,5,6];

let result=[];

for(let i=0;i<arr1.length;i++){
    result[result.length]=arr1[i];
}

for(let i=0;i<arr2.length;i++){
    result[result.length]=arr2[i];
}

console.log(result);