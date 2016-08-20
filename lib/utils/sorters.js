'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortText = sortText;
exports.sortNumeric = sortNumeric;
exports.sortCurrency = sortCurrency;
exports.sortDate = sortDate;

var _comparators = require('./comparators');

function sortText(collection, key) {
  return collection.sort(function (a, b) {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return (0, _comparators.compareText)(a, b);
  });
};

function sortNumeric(collection, key) {
  return collection.sort(function (a, b) {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return (0, _comparators.compareNumeric)(a, b);
  });
};

function sortCurrency(collection, key) {
  return collection.sort(function (a, b) {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return (0, _comparators.compareCurrency)(a, b);
  });
};

function sortDate(collection, key) {
  return collection.sort(function (a, b) {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return (0, _comparators.compareDate)(a, b);
  });
};