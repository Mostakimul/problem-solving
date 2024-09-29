function checkLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

checkLeapYear(2020)
  ? console.log('This is leap year')
  : console.log('Not a leap year');
