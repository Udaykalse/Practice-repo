const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}

for (let j = 0; j < 3; j++) {
  funcs[j]();
}
