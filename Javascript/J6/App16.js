let users = ["Uday", "Parvej", "Siddharth"];

console.log("Traditional Way");
for (let i = 0; i < users.length; i++) {
  console.log(i, users[i]);
}

console.log("-------------------------");

console.log("Modern Way");

users.forEach((user, indX) => {
  console.log(indX, user);
});
