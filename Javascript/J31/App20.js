const jsonString = '{"name":"Parvej", "age":24}';
const obj = JSON.parse(jsonString, (key, value) =>
  typeof value === "number" ? value + 1 : value,
);

console.log(obj);
