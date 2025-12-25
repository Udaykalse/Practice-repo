const prompt1 = require("prompt-sync")();


const operator = prompt1("Enter Operator (either +,-,* or /)");

const number1 = parseFloat(prompt1("Enter First Number : -"));
const number2 = parseFloat(prompt1("Enter Second Number : -"));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if (operator == "/") {
  result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
