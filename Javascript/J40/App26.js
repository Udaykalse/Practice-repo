let person1 = { name: "Uday" };

function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

let mSg = greet.call(person1, "Hello", "!");

console.log(mSg);
