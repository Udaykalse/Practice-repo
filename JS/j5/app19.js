let tags = ["React", "Node", "Docker"];
let updatedTags = tags.map((tag) => (tag === "Node" ? "Express" : tag));
console.log(updatedTags)
