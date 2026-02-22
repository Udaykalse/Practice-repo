function groupAna(strs) {
  const map = {};
  for (let s of strs) {
    const key = s.split("").sort().join("");
    map[key] = map[key] ? [...map[key], s] : [s];
  }
  return Object.values(map)
}

console.log(groupAna(["eat","tea","tan","ate","nat","bat"]))