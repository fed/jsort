'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayType = getArrayType;

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isText(data) {
  return typeof data === 'string';
}

function getDataType(data) {
  if ((0, _isNumber2.default)(data)) {
    return _constants.DATA_TYPE_NUMERIC;
  }

  if (isText(data)) {
    return _constants.DATA_TYPE_TEXT;
  }
}

function getArrayType(collection) {
  var baseDataType = getDataType(collection[0]);

  collection.filter(function (item, index) {
    return index > 0;
  }).forEach(function (item, index) {
    var currentDataType = getDataType(item);

    if (currentDataType !== baseDataType) {
      // throw exception and exit loop
      console.log(item, index);
    }
  });

  return baseDataType;
}

// sort() {
//     let collection = this.collection;

//     let type = (item) => {};

//     let dataTypes = collection
//       .map((item) => type(item))
//       .reduce


//     let dataTypes = [0, 0, 0, 0];

//     collection.forEach((item) => {
//       if (isNumber(item)) {
//         dataTypes[0] = 1;
//       }

//       if (isText(item)) {
//         dataTypes[1] = 1;
//       }

//       if (isCurrency(item)) {
//         dataTypes[2] = 1;
//       }

//       if (isDate(item)) {
//         dataTypes[3] = 1;
//       }
//     });

//     if (dataTypes.reduce((item, acc) => item + acc) === 1) {
//       if (dataTypes[0] === 1) {
//         // sort number
//       }

//       if (dataTypes[1] === 1) {
//         // sort number
//       }

//       if (dataTypes[2] === 1) {
//         // sort number
//       }

//       if (dataTypes[3] === 1) {
//         // sort number
//       }


//     } else {
//       // exception, get a life
//     }

//     // sort here
//     // 1. identify data type
//     let numbers = collection.filter((item) => isNumber(item));

//     if (numbers.lenght === collection.lenght) {
//       // it's alright, numbers
//     } else {
//       if (numbers.length > 0) {
//         // mixed data type exception
//       }
//     }

//     // collection.forEach((item) => {
//     //   if (isNumber(item)) {
//     //     dataTypes.push('number');
//     //     continue;
//     //   }

//     //   if (isText(item)) {
//     //     dataTypes.push('number');
//     //     continue;
//     //   }

//     //   if (isCurrency(item)) {
//     //     dataTypes.push('number');
//     //     continue;
//     //   }

//     //   if (isDate(item)) {
//     //     dataTypes.push('number');
//     //     continue;
//     //   }


//     // })