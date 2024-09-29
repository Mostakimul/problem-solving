function removeDuplicate(arr) {
  // return [...new Set(arr)];
  const seen = {};
  const result = [];

  for (let el of arr) {
    if (!seen[el]) {
      seen[el] = true;
      result.push(el);
    }
  }

  return result;
}

const numbers = [1, 5, 3, 7, 3, 8, 1, 9, 5, 10, 7, 2, 8];

console.log(removeDuplicate(numbers));
