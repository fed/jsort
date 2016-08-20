'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareText = compareText;
exports.compareNumeric = compareNumeric;
exports.compareCurrency = compareCurrency;
exports.compareDate = compareDate;

var _parsers = require('./parsers');

function compareText(a, b) {
  var x = a.toLowerCase();
  var y = b.toLowerCase();

  return x > y ? 1 : x < y ? -1 : 0;
};

function compareNumeric(a, b) {
  return a - b;
};

function compareCurrency(a, b) {
  return (0, _parsers.parseCurrency)(a) - (0, _parsers.parseCurrency)(b);
};

function compareDate(a, b) {
  return (0, _parsers.parseDate)(a) - (0, _parsers.parseDate)(b);
};