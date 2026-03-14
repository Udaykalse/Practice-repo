let arr = [1, [2, 3], 4];

let flat = [];
for (let el of arr) {
  if (Array.isArray(el)) flat.push(...el);
  else flat.push(el);
}
console.log(flat);
