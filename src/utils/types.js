import isNumber from 'lodash/isNumber';
import {DATA_TYPE_TEXT, DATA_TYPE_NUMERIC/*, DATA_TYPE_CURRENCY, DATA_TYPE_DATE*/} from './constants';

function isText(data) {
  return typeof data == 'string';
}

function getDataType(data) {
  if (isNumber(data)) {
    return DATA_TYPE_NUMERIC;
  }

  if (isText(data)) {
    return DATA_TYPE_TEXT;
  }
}

export function getArrayType(collection) {
  let baseDataType = getDataType(collection[0]);

  collection
    .filter((item, index) => index > 0)
    .forEach((item, index) => {
      let currentDataType = getDataType(item);

      if (currentDataType !== baseDataType) {
        // throw exception and exit loop
        console.log(item, index);
      }
    });

  return baseDataType;
}
