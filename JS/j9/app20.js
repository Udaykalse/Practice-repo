const user = {
  name: "Uday",
  PWD: "12345",
  role: "SDE",
};

const { PWD, ...safeUser } = user;

console.log(safeUser);
