var jsort = require('./jsort');
var chalk = require('chalk');

// Strings
var countries = ['Australia', 'Argentina', 'New Zealand', 'Austria', 'Canada'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of strings'));
console.log('Sorted countries: ', jsort.text(countries));
console.log('Reverse-sorted countries: ', jsort.text(countries).reverse());

// Integers
var integers = [1, 10, 11, 110, 111, 0];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of integers'));
console.log('Sorted integers: ', jsort.numeric(integers));
console.log('Reverse-sorted integers: ', jsort.numeric(integers).reverse());

// Floats
var floats = [1.1, 1.15, 1.20, 10.1, 11.1, 0.01];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of floats'));
console.log('Sorted floats: ', jsort.numeric(floats));
console.log('Reverse-sorted floats: ', jsort.numeric(floats).reverse());

// YYYY-MM-DD formatted dates
var dates = ['2015-02-04', '2015-02-02', '2017-02-01'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of dates in YYYY-MM-DD format'));
console.log('Sorted dates: ', jsort.date(dates));
console.log('Reverse-sorted dates: ', jsort.date(dates).reverse());

// MM/DD/YYYY formatted dates
var moreDates = ['01/31/2015', '01/30/2015', '01/31/2016'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of dates in MM/DD/YYYY format'));
console.log('Sorted dates: ', jsort.date(moreDates));
console.log('Reverse-sorted dates: ', jsort.date(moreDates).reverse());

// Currency
var sales = ['$1,726.75', '$1,726.50', '$1,720.99'];
console.log('\n' + chalk.white.bgCyan.bold('Sorting a collection of currencies'));
console.log('Sorted currencies: ', jsort.currency(sales));
console.log('Reverse-sorted currencies: ', jsort.currency(sales).reverse());
