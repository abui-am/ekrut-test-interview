function debounce(callback, wait) {
  let timer = 0;

  return (...args) => {
    clearTimeout(timer);
    return new Promise(resolve => {
      timer = setTimeout(() => resolve(callback(...args)), wait);
    });
  };
}

export default debounce;
