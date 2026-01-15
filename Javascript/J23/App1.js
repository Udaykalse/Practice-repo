function debou(fn, del) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, del);
  };
}
