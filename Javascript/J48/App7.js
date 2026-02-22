function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, deepClone(v)]),
  );
}
const obj3 = {
  skills: ["React", "Node", "Docker"]
};

const copy3 = deepClone(obj3);
copy3.skills.push("Linux");

console.log(obj3.skills); 