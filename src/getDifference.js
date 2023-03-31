import * as sub from "./sub-function.js"
import _ from "lodash";

 export default (filepath1, filepath2) => {
  const obj1 = sub.getJSONobj(filepath1);
  const obj2 = sub.getJSONobj(filepath2);

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2); 

    const sortedKeys = _.sortBy(keys);
    const diff = sortedKeys.reduce((acc, key) => {
      if (!obj1.hasOwnProperty(key)) return {...acc, [`+ ${key}`]: obj2[key]};
      if (!obj2.hasOwnProperty(key)) return { ...acc, [`- ${key}`]: obj1[key]};
      if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
        return _.isEqual(obj1[key], obj2[key]) ? { ...acc, [`  ${key}`]: obj1[key]} : { ...acc, [`- ${key}`]: obj1[key], [`+ ${key}`]: obj2[key]};
      }

    }, {});
    
    return diff;
  };

  