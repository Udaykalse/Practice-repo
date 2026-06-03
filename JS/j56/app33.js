let arr=[1,2,2,3,4,4];

let dup=[];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            dup.push(arr[i]);
            break;
        }
    }
}

console.log(dup);