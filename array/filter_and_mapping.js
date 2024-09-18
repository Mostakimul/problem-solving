const people = [
  {
    name: 'John Doe',
    age: 30,
    gender: 'Male',
  },
  {
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
  },
  {
    name: 'Sam Brown',
    age: 35,
    gender: 'Male',
  },
  {
    name: 'Emily Johnson',
    age: 28,
    gender: 'Female',
  },
];

function filterGender(people, gender) {
  const result = people.filter((pl) => pl.gender !== gender);
  return result;
}

console.log(filterGender(people, 'Male'));
