import {sortText, sortNumeric, sortCurrency, sortDate} from './utils/sorters';

const jsort = {
  text: sortText,
  numeric: sortNumeric,
  currency: sortCurrency,
  date: sortDate
};

export default jsort;
