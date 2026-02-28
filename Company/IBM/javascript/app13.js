function getElement(arr, indX) {
  try {
    if (indX < 0 || indX >= arr.length) throw "Error";
  } catch {
    return -1;
  }
}

console.log(getElement([1, 2, 3], 4));
