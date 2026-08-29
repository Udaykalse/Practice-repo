const person = {
    name: "Uday",
    age: 23,
    city: "Pune"
};

let count = 0;

for (let key in person) {
    count++;
}

console.log(count);