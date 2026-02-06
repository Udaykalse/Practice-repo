const numbers = [1, 2, 3, 4, 5, 6];

const [first, second, ...remaining] = numbers;

console.log("First:", first);          
console.log("Second:", second);        
console.log("Remaining:", remaining);  

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
const [firstFruit, ...otherFruits] = fruits;

console.log("First fruit:", firstFruit);     
console.log("Other fruits:", otherFruits);   
function printScores([highest, ...rest]) {
    console.log("Highest score:", highest);
    console.log("Average of rest:", rest.reduce((a, b) => a + b, 0) / rest.length);
}

printScores([95, 80, 75, 85, 90]);