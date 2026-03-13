const greet = (msg) => (name) => `${msg}, ${name}`;
const sayHello = greet("Hello");
console.log(sayHello("Uday"));
