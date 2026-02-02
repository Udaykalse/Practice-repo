let person2 = { name: "Aman" };
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

let message = greet.apply(person2, ["hi", " !!"]);

console.log(message);
