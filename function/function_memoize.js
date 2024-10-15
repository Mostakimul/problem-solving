function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function slowFunction(num) {
  return num * num;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(6));
