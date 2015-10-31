var jsort = require('./jsort');
var chalk = require('chalk');

// Strings
var countries = ['Australia', 'Argentina', 'New Zealand', 'Austria', 'Canada'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of strings'));
console.log('Sorted countries: ', jsort(countries, 'text'));
console.log('Reverse-sorted countries: ', jsort(countries, 'text', true));

// Integers
var integers = [1, 10, 11, 110, 111, 0];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of integers'));
console.log('Sorted integers: ', jsort(integers, 'number'));
console.log('Reverse-sorted integers: ', jsort(integers, 'number', true));

// Floats
var floats = [1.1, 1.15, 1.20, 10.1, 11.1, 0.01];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of floats'));
console.log('Sorted floats: ', jsort(floats, 'number'));
console.log('Reverse-sorted floats: ', jsort(floats, 'number', true));

// YYYY-MM-DD formatted dates
var dates = ['2015-02-04', '2015-02-02', '2017-02-01'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of dates in YYYY-MM-DD format'));
console.log('Sorted dates: ', jsort(dates, 'date'));
console.log('Reverse-sorted dates: ', jsort(dates, 'date', true));

// MM/DD/YYYY formatted dates
var moreDates = ['01/31/2015', '01/30/2015', '01/31/2016'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of dates in MM/DD/YYYY format'));
console.log('Sorted dates: ', jsort(moreDates, 'date'));
console.log('Reverse-sorted dates: ', jsort(moreDates, 'date', true));

// Currency
var sales = ['$1726,75', '$1726,50', '$1720,99'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of currencies'));
console.log('Sorted currencies: ', jsort(sales, 'currency'));
console.log('Reverse-sorted currencies: ', jsort(sales, 'currency', true));
