function debounce(fn, delay) {
  let timeID;
  return function (...args) {
    clearTimeout(timeID);
    timeID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


const logInput = debounce((txt)=>console.log(txt),300)
logInput("A")
logInput("AB")
logInput("ABC")
