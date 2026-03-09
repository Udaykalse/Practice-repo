function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function handleSearch(query) {
  console.log(`Searching for :- ${query}`);
}

const debouncedSearch = debounce(handleSearch, 500);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("javascript");
