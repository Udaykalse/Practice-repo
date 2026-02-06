function processData(name, age, ...hobbies) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Hobbies:", hobbies);
    console.log("Number of hobbies:", hobbies.length);
}

processData("John", 25, "Reading", "Gaming", "Cooking");
function calculate(operation, ...numbers) {
    if (operation === 'add') {
        return numbers.reduce((sum, num) => sum + num, 0);
    } else if (operation === 'multiply') {
        return numbers.reduce((product, num) => product * num, 1);
    }
}

console.log(calculate('add', 1, 2, 3, 4));      
console.log(calculate('multiply', 2, 3, 4));    