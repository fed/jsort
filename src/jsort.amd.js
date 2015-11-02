define(function (require, exports, module) {
  module.exports = {
    text: function (collection, key) {
      var compareText = require('./utils/compare-text');

      return collection.sort(function (a, b) {
        if (key) {
          a = a[key];
          b = b[key];
        }

        return compareText(a, b);
      });
    },

    numeric: function (collection, key) {
      var compareNumeric = require('./utils/compare-numeric');

      return collection.sort(function (a, b) {
        if (key) {
          a = a[key];
          b = b[key];
        }

        return compareNumeric(a, b);
      });
    },

    currency: function (collection, key) {
      var compareCurrency = require('./utils/compare-currency');

      return collection.sort(function (a, b) {
        if (key) {
          a = a[key];
          b = b[key];
        }

        return compareCurrency(a, b);
      });
    },

    date: function (collection, key) {
      var compareDate = require('./utils/compare-date');

      return collection.sort(function (a, b) {
        if (key) {
          a = a[key];
          b = b[key];
        }

        return compareDate(a, b);
      });
    }
  };
});
