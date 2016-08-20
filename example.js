var jsort = require('./lib/jsort.js').default;
// import jsort from 'jsort'; // Using ES6

var firstSorted = jsort
  .data([2.01, 1.3555, 3, 1990])
  .sort();

console.log('First Example', firstSorted);

// var secondSorted = jsort
//   .data([
//     {name: 'Ted', age: 25},
//     {name: 'Mario', age: 10},
//     {name: 'Homer', age: 50}
//   ])
//   .by('age')
//   .desc()
//   .limit(2)
//   .sort();

// console.log('Second Example', secondSorted);
