function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));          
console.log(sum(1, 2, 3, 4, 5));     
console.log(sum(10, 20));            

function getFirstAndRest(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}

getFirstAndRest(1, 2, 3, 4, 5);