define(function (require, exports, module) {
  module.exports = {
    text: function (collection) {
      var compareText = require('./utils/compare-text');

      return collection.sort(function (a, b) {
        return compareText(a, b);
      });
    },

    numeric: function (collection) {
      var compareNumeric = require('./utils/compare-numeric');

      return collection.sort(function (a, b) {
        return compareNumeric(a, b);
      });
    },

    currency: function (collection, reverse) {
      var compareCurrency = require('./utils/compare-currency');

      return collection.sort(function (a, b) {
        return compareCurrency(a, b);
      });
    },

    date: function (collection, reverse) {
      var compareDate = require('./utils/compare-date');

      return collection.sort(function (a, b) {
        return compareDate(a, b);
      });
    }
  };
});
