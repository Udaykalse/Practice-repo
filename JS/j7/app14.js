const user = {
  name: "Uday",
};

function greet() {
  console.log(`Hello ${this.name}`);
}

const newFun = greet.bind(user);
newFun()
