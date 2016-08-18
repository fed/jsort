import {parseCurrency, parseDate} from './parsers';

export function compareText(a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();

  return x > y ? 1 : (x < y ? -1 : 0);
};

export function compareNumeric(a, b) {
  return a - b;
};

export function compareCurrency(a, b) {
  return parseCurrency(a) - parseCurrency(b);
};

export function compareDate(a, b) {
  return parseDate(a) - parseDate(b);
};
