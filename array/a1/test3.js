function intro(age) {
  console.log(this.name, age);
}

intro.call({ name: "Amey" }, 25);

