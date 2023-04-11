import _ from 'lodash';
import * as sub from './sub-function.js';

export default (filepath1, filepath2) => {
  const obj1 = sub.getJSONobj(filepath1);
  const obj2 = sub.getJSONobj(filepath2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);

  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.reduce((acc, key) => {
    if (!key in obj1) return { ...acc, [`+ ${key}`]: obj2[key] };
    if (!key in obj2) return { ...acc, [`- ${key}`]: obj1[key] };
    if (key in obj1 && key in obj2) {
      return _.isEqual(obj1[key], obj2[key]) ? { ...acc, [`  ${key}`]: obj1[key] } : { ...acc, [`- ${key}`]: obj1[key], [`+ ${key}`]: obj2[key] };
    }
  }, {}); 
  return diff;
}; 