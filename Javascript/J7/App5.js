function findDuplicates(arr){
    let set=new Set();
    for(let num of arr){
        if(set.has(num)) return num;
        set.add(num)
    }
}
console.log(findDuplicates([1,3,4,2,2]));