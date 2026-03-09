const user = {
  name: "Uday",
  greet() {
    console.log("Hello ", this.name);
  },
};

setTimeout(user.greet.bind(user), 1000);