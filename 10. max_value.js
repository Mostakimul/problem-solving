function maxValue(arr) {
  let max = null;
  for (let el of arr) {
    if (el > 0) {
      if (max === null || el > max) {
        max = el;
      }
    }
  }

  return max;
}

const numbers = [1, 5, 3, 7, 3, 8, 1, 9, 5, 10, 7, 2, 8];
console.log(maxValue(numbers));
