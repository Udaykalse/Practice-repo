function filterUser(names) {
  var valid = [];
  for (var i = 0; i < names.length; i++) {
    if (names[i].length >= 5) {
      valid.push(names[i]);
    }
  }
  return valid;
}

console.log(filterUser(["Ali", "Parvej", "Rex", "Samurai"]));
