function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flattenArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}


console.log(flattenArray([1,2,[3,4,[5],6],6]))