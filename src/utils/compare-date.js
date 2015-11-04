module.exports = function (a, b) {
  var parseDate = require('./parse-date');
  return parseDate(a) - parseDate(b);
};
