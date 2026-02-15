let stud = [
  { id: 1, name: "Sidharth" },
  { id: 2, name: "Parvej" },
];

let obj = {};
for (let i = 0; i < stud.length; i++) {
  obj[stud[i].id] = stud[i];
}
console.log(obj);
