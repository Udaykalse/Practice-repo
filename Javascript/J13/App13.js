let emp = {
  Parvej: 20000,
  Amey: 35000,
  basuraj: 10000,
};

let total = 0;

for (let key in emp) {
  total += emp[key];
}

console.log(total);
