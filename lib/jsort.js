'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // @TODO: Do I really need this?
// @TODO: Do I really need this?


var _slice = require('lodash/slice');

var _slice2 = _interopRequireDefault(_slice);

var _reverse = require('lodash/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

var _types = require('./utils/types');

var _sorters = require('./utils/sorters');

var _constants = require('./utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSort = function () {
  function JSort() {
    _classCallCheck(this, JSort);

    this.reset();
  }

  _createClass(JSort, [{
    key: 'reset',
    value: function reset() {
      // @TODO: Make private
      this.collection = [];
      this.shouldReverse = false;
      this.limitTo = 0;
    }
  }, {
    key: 'data',
    value: function data(_data) {
      this.collection = _data;
      return this;
    }
  }, {
    key: 'desc',
    value: function desc() {
      this.shouldReverse = true;
      return this;
    }
  }, {
    key: 'limit',
    value: function limit(_limit) {
      this.limitTo = _limit;
      return this;
    }
  }, {
    key: 'sort',
    value: function sort() {
      var collection = this.collection;
      var arrayType = (0, _types.getArrayType)(collection); // or exception

      switch (arrayType) {
        case _constants.DATA_TYPE_TEXT:
          collection = (0, _sorters.sortText)(collection);
          break;
        case _constants.DATA_TYPE_NUMERIC:
          collection = (0, _sorters.sortNumeric)(collection);
          break;
        case _constants.DATA_TYPE_CURRENCY:
          collection = (0, _sorters.sortCurrency)(collection);
          break;
        case _constants.DATA_TYPE_DATE:
          collection = (0, _sorters.sortDate)(collection);
          break;
        // default throw exception?
      }

      if (this.shouldReverse) {
        collection = (0, _reverse2.default)(collection);
        // collection = collection.reverse();
      }

      if (this.limitTo) {
        collection = (0, _slice2.default)(collection, 0, this.limitTo);
        // collection = collection.slice(0, this.limitTo);
      }

      this.reset();

      return collection;
    }
  }]);

  return JSort;
}();

var jsort = new JSort();

exports.default = jsort;