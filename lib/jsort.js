'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sorters = require('./utils/sorters');

var jsort = {
  text: _sorters.sortText,
  numeric: _sorters.sortNumeric,
  currency: _sorters.sortCurrency,
  date: _sorters.sortDate
};

exports.default = jsort;