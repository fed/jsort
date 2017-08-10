/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var sorters_1 = __webpack_require__(1);
	var jsort = {
	    text: sorters_1.sortText,
	    numeric: sorters_1.sortNumeric,
	    currency: sorters_1.sortCurrency,
	    date: sorters_1.sortDate
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = jsort;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var comparators_1 = __webpack_require__(2);
	function sortText(collection, key) {
	    return collection.sort(function (a, b) {
	        if (key) {
	            a = a[key];
	            b = b[key];
	        }
	        return comparators_1.compareText(a, b);
	    });
	}
	exports.sortText = sortText;
	;
	function sortNumeric(collection, key) {
	    return collection.sort(function (a, b) {
	        if (key) {
	            a = a[key];
	            b = b[key];
	        }
	        return comparators_1.compareNumeric(a, b);
	    });
	}
	exports.sortNumeric = sortNumeric;
	;
	function sortCurrency(collection, key) {
	    return collection.sort(function (a, b) {
	        if (key) {
	            a = a[key];
	            b = b[key];
	        }
	        return comparators_1.compareCurrency(a, b);
	    });
	}
	exports.sortCurrency = sortCurrency;
	;
	function sortDate(collection, key) {
	    return collection.sort(function (a, b) {
	        if (key) {
	            a = a[key];
	            b = b[key];
	        }
	        return comparators_1.compareDate(a, b);
	    });
	}
	exports.sortDate = sortDate;
	;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var parsers_1 = __webpack_require__(3);
	/**
	 * Compares two strings
	 * @param  {string} a First string to compare
	 * @param  {string} b Second string to compare
	 * @return {number}   Positive number if, zero if same number
	 */
	function compareText(a, b) {
	    var x = a.toLowerCase();
	    var y = b.toLowerCase();
	    return x > y ? 1 : (x < y ? -1 : 0);
	}
	exports.compareText = compareText;
	;
	/**
	 * Compares two numbers
	 * @param  {number} a First number to compare
	 * @param  {number} b Second number to compare
	 * @return {number}   Positive number if, negative otherwise
	 */
	function compareNumeric(a, b) {
	    return a - b;
	}
	exports.compareNumeric = compareNumeric;
	;
	function compareCurrency(a, b) {
	    return parsers_1.parseCurrency(a) - parsers_1.parseCurrency(b);
	}
	exports.compareCurrency = compareCurrency;
	;
	function compareDate(a, b) {
	    return parsers_1.parseDate(a) - parsers_1.parseDate(b);
	}
	exports.compareDate = compareDate;
	;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Parses a currency string, removing symbols and punctuation marks, only keeping decimals
	 * @param  {string} value Amount, might have
	 * @return {number}       Absolute number
	 */
	function parseCurrency(value) {
	    return Number(value.replace(/[^0-9\.\-]+/g, ''));
	}
	exports.parseCurrency = parseCurrency;
	;
	function parseDate(date) {
	    if (date.toString().match(/^\d{4}-\d{2}-\d{2}$/g)) {
	        date += ' 00:00:00';
	    }
	    return Date.parse(date);
	}
	exports.parseDate = parseDate;
	;


/***/ }
/******/ ]);