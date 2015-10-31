var sort = require('./sort');

// Strings
var countries = ['Australia', 'Argentina', 'New Zealand', 'Austria', 'Canada'];
console.log('Sorted countries: ', sort(countries, 'text'));
console.log('Reverse-sorted countries: ', sort(countries, 'text', true));

// Numbers
var numbers = [1, 10, 11, 110, 111, 0];
console.log('Sorted numbers: ', sort(numbers, 'number'));
console.log('Reverse-sorted numbers: ', sort(numbers, 'number', true));

// Dates
var dates = ['2015-02-04', '2015-02-02', '2017-02-01'];
console.log('Sorted numbers: ', sort(dates, 'date'));
console.log('Reverse-sorted numbers: ', sort(dates, 'date', true));

// Currency
var sales = ['$1726,75', '$1726,50', '$1720,99'];
console.log('Sorted currency: ', sort(sales, 'currency'));
console.log('Reverse-sorted currency: ', sort(sales, 'currency', true));
