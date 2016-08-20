import slice from 'lodash/slice'; // @TODO: Do I really need this?
import reverse from 'lodash/reverse'; // @TODO: Do I really need this?
import {getArrayType} from './utils/types';
import {sortText, sortNumeric, sortCurrency, sortDate} from './utils/sorters';
import {DATA_TYPE_TEXT, DATA_TYPE_NUMERIC, DATA_TYPE_CURRENCY, DATA_TYPE_DATE} from './utils/constants';

class JSort {
  constructor() {
    this.reset();
  }

  reset() {
    // @TODO: Make private
    this.collection = [];
    this.shouldReverse = false;
    this.limitTo = 0;
  }

  data(data) {
    this.collection = data;
    return this;
  }

  desc() {
    this.shouldReverse = true;
    return this;
  }

  limit(limit) {
    this.limitTo = limit;
    return this;
  }

  sort() {
    let collection = this.collection;
    let arrayType = getArrayType(collection); // or exception

    switch (arrayType) {
      case DATA_TYPE_TEXT:
        collection = sortText(collection);
        break;
      case DATA_TYPE_NUMERIC:
        collection = sortNumeric(collection);
        break;
      case DATA_TYPE_CURRENCY:
        collection = sortCurrency(collection);
        break;
      case DATA_TYPE_DATE:
        collection = sortDate(collection);
        break;
      // default: throw exception otherwise?
    }

    if (this.shouldReverse) {
      collection = reverse(collection);
      // collection = collection.reverse();
    }

    if (this.limitTo) {
      collection = slice(collection, 0, this.limitTo);
      // collection = collection.slice(0, this.limitTo);
    }

    this.reset();

    return collection;
  }
}

let jsort = new JSort();

export default jsort;
