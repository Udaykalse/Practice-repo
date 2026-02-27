let a = { parvej: 1 };
let b = { sidharth: 2 };
let clone = Object.assign({}, a);
clone.parvej = 99;
console.log(a.parvej);
console.log(clone.parvej);
