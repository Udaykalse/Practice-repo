const p1 = {
  fName: "Sid",
  lName: "Konde",
};

function fullName() {
  return this.fName + " " + this.lName;
}

console.log(fullName.call(p1));
