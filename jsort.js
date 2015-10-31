module.exports = function (collection, type, reverse) {
  var reverse = reverse || false,
      compareText = require('./utils/compare-text'),
      compareNumber = require('./utils/compare-number'),
      compareCurrency = require('./utils/compare-currency'),
      compareDate = require('./utils/compare-date');

  collection.sort(function (a, b) {
    var result;

    switch (type) {
      case 'text':
        result = compareText(a, b);
        break;

      case 'number':
        result = compareNumber(a, b);
        break;

      case 'currency':
        result = compareCurrency(a, b);
        break;

      case 'date':
        result = compareDate(a, b);
        break;

      default:
        result = compareText(a, b);
    }

    return result;
  });

  if (reverse) {
    collection.reverse();
  }

  return collection;
};
