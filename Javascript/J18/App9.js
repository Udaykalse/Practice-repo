function getUnique(arr){
    const uniqueValue=arr.filter(function(itM,idX){
        return arr.indexOf(itM)===idX;
    })
    return uniqueValue;
}

console.log(getUnique([1,3,5,7,2,1,4,1,23,4,5,6,7]))