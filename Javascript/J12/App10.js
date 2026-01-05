const findInList = (arr, item) => arr.includes(item);

const showFound = (exits) => console.log(exits ? "Found" : "Not Found");

function searchInventory(list, query) {
  const result = findInList(list, query);
  showFound(result);
}

searchInventory(["milk", "bread"], "milk");
