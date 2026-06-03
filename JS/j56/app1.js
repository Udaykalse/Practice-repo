function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data);
});
console.log("Loading......");
