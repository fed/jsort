import {parseCurrency, parseDate} from './parsers';

/**
 * Compares two strings
 * @param  {string} a First string to compare
 * @param  {string} b Second string to compare
 * @return {number}   Positive number if, zero if same number
 */
export function compareText(a: string, b: string): number {
  const x: string = a.toLowerCase();
  const y: string = b.toLowerCase();

  return x > y ? 1 : (x < y ? -1 : 0);
};

/**
 * Compares two numbers
 * @param  {number} a First number to compare
 * @param  {number} b Second number to compare
 * @return {number}   Positive number if, negative otherwise
 */
export function compareNumeric(a: number, b: number): number {
  return a - b;
};

export function compareCurrency(a, b) {
  return parseCurrency(a) - parseCurrency(b);
};

export function compareDate(a, b) {
  return parseDate(a) - parseDate(b);
};
