function greet(msg, ...names) {
  for (let n of msg) {
    console.log(msg + " " + n);
  }
}

console.log("Hello", "Parvej", "Sidharth", "Aman");
