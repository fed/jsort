import {compareText, compareNumeric, compareCurrency, compareDate} from './comparators';

export function sortText(collection, key) {
  return collection.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    return compareText(a, b);
  });
};

export function sortNumeric(collection, key) {
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
