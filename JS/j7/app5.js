const stud1 = {
  Fname: "Aman",
};

const stud2 = {
  Fname: "Vijay",
};

function intro(age) {
  console.log(`${this.Fname} is ${age} yr old`);
}

intro.call(stud1, 22);
intro.call(stud2, 21);
