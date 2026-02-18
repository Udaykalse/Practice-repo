const set = new Set();
set.add(5);
set.add("Hello");
set.add({ name: "Sid" });
for (let itM of set) {
  console.log(itM + 6);
}
