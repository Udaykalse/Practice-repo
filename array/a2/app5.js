function word(arr) {
  let words = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      //   words += arr[i];
      words.push(arr[i]);
    }
  }
  return words;
}

console.log(word([1, "hello", true, "world", 5]));
