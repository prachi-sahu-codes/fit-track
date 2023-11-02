export const debounce = (func, delay) => {
  let timeout;

  return function executedFunction(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      func(...args);
    }, delay);
  };
};
