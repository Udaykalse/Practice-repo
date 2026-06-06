function greet(name, callback) {
  callback(`Hello, ${name}`);
}

greet("Uday", (message) => console.log(message));
