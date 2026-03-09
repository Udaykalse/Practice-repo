const person = {
  name: "Parvej",
};

function showSkills(sk1, sk2) {
  console.log(`${this.name} knows ${sk1} and ${sk2}`);
}

showSkills.apply(person, ["Riding, licking"]);
