let person3 = { name: "Siddharth" };
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

let messageSiddharth = greet.bind(person3, "Hey");
let message = messageSiddharth("!!");

console.log(message);
