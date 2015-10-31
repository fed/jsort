module.exports = function (a, b) {
  var parseCurrency = require('./parse-currency');
  return parseCurrency(a) - parseCurrency(b);
};
