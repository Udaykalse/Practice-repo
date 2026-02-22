function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const searchAPI = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const debouncedSearch = debounce(searchAPI, 300);
debounce("https://jsonplaceholder.typicode.com/posts");
