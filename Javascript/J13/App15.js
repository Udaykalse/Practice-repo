let parices = {
  pen: 10,
  book: 50,
};

for (let item in parices) {
  parices[item] = parices[item] + parices[item] * 0.1;
}

console.log(parices);
