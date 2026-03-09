const user1 = {
  name: "Basuvaraj",
};

const user2 = {
  name: "Amey",
};

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

greet.call(user1, "Pune");
greet.call(user2, "Mumbai");
