/* eslint-disable */

import _ from "lodash";


const obj1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  };

const obj2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};



const getDifference = (obj1, obj2) => {

      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      const keys = _.union(keys1, keys2);
  
      const sortedKeys = _.sortBy(keys);

      const diff = sortedKeys.reduce((acc, key) => {
        if (!_.has(obj1, key)) return {...acc, [`+ ${key}`]: obj2[key]};
        if (!_.has(obj2, key)) return { ...acc, [`- ${key}`]: obj1[key]};
        if (_.has(obj1, key) && _.has(obj2, key)) {
         return _.isEqual(obj1[key], obj2[key]) ? { ...acc, [`  ${key}`]: obj1[key]} : { ...acc, [`- ${key}`]: obj1[key], [`+ ${key}`]: obj2[key]};
        }
        return {...acc};
      }, {});
      
      return diff;
    };

    console.log(getDifference(obj1, obj2));

    
    const doFormatting = (data, format = 'string') => {
      let result = '';
      if (format === 'string') {
      const keys = Object.keys(data);
      keys.map((key) => result += `${key}: ${data[key]}\n`);
      }
      return result.slice(0, -1);
    };

    console.log('result format');
    console.log(doFormatting(getDifference(obj1, obj2)));  
