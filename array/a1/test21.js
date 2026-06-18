const obj = {
  name: "Lucky",
};
function display() {
  console.log(this.name);
}

setTimeout(display.bind(obj), 1000);
