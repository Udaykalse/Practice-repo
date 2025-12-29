let Arr = [1,2,3,4,'a',4,5,'b','c']
let uniqueArr=[];
for (var i = 0;i<Arr.length;i++){
    if(!uniqueArr.includes(Arr[i])){
        if(Number(Arr[i])){
            uniqueArr.push(Arr[i])
        }
    }
}

console.log(uniqueArr)