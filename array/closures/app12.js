function createGreeting(greeting) {
  return function (name) {
    return greeting + " " + name;
  };
}
const hello = createGreeting("Hello");
const hi = createGreeting("Hi");
console.log(hello("Amey"));
console.log(hi("Aman"));
