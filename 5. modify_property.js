const people = [
  { name: 'John Doe', age: 30, gender: 'Male' },
  { name: 'Jane Smith', age: 25, gender: 'Female' },
  { name: 'Sam Brown', age: 35, gender: 'Male' },
  { name: 'Emily Johnson', age: 28, gender: 'Female' },
];

function updateProperty(arr, key, value, prop, newValue) {
  const obj = arr.find((item) => item[key] === value);
  if (obj) obj[prop] = newValue;
  return arr;
}

console.log(updateProperty(people, 'name', 'John Doe', 'age', 70));
