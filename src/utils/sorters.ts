import {compareText, compareNumeric, compareCurrency, compareDate} from './comparators';

/**
 * Sorts two strings
 * @param  {Array<string>} collection List of strings we want to sort
 * @param  {string}        key        If
 * @return {Array<string>}            Sorted array
 */
export function sortText(collection: Array<string>, key?: string): Array<string> {
  return collection.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return compareText(a, b);
  });
};

export function sortNumeric(collection: Array<number>, key?: string): Array<number> {
  return collection.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return compareNumeric(a, b);
  });
};

export function sortCurrency(collection, key) {
  return collection.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return compareCurrency(a, b);
  });
};

export function sortDate(collection, key) {
  return collection.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return compareDate(a, b);
  });
};
