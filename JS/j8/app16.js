let user = {
  name: "Amit",
  greet() {
    console.log(this.name);
  },
};

let fn = user.greet.bind(user);
fn();
