function squareNumber(num) {
  return Math.pow(num, 2);
}

function doubleNumber(num) {
  return num + num;
}

function addFive(num) {
  return num + 5;
}

function compositeFunc(num) {
  return addFive(doubleNumber(squareNumber(num)));
}

console.log(compositeFunc(5));
