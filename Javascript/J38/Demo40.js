function findMax(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMax(5, 10, 3, 8, 15));    
console.log(findMax(100, 50, 200, 75));   
console.log(findMax(7));                   
function findMaxSimple(...numbers) {
    return Math.max(...numbers);
}

console.log(findMaxSimple(5, 10, 3, 8, 15)); 