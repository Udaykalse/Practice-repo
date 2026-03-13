const data = {
  a: {
    b: {
      c: 50,
    },
  },
};

function findC(obj) {
  if (obj.c) return obj.c;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return findC(obj[key]);
    }
  }
}
console.log(findC(data));
