const cars = [
  {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
  },
  {
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
  },
  {
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
  },
];

function sortObject(arr, property, orderBy = 'asc') {
  const sortedArray = arr.sort((a, b) => {
    if (orderBy === 'desc') {
      return b[property] - a[property];
    } else {
      return a[property] - b[property];
    }
  });

  return sortedArray;
}

console.log(sortObject(cars, 'year'));
