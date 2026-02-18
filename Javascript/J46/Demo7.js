let arr = [1,'1','abc',null,2,0.5,-1,undefined,2];

function getNumber(a) {
  return a.filter((x) => typeof x === "number");

}
console.log(getNumber((arr)))
