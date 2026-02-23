let str = "hello    world                            udaysinh";

let result = "";

let spaceFound = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    result += str[i];
    spaceFound = false;
  } else {
    if (!spaceFound) {
      result += " ";
      spaceFound = true;
    }
  }
}

console.log(result)