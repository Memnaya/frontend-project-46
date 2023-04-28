import _ from 'lodash';

export default (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.reduce((acc, key) => {
    if (!_.has(data1, key)) return { ...acc, [`+ ${key}`]: data2[key] };
    if (!_.has(data2, key)) return { ...acc, [`- ${key}`]: data1[key] };
    if (_.has(data1, key) && _.has(data2, key)) {
      return _.isEqual(data1[key], data2[key]) ? { ...acc, [`  ${key}`]: data1[key] } : { ...acc, [`- ${key}`]: data1[key], [`+ ${key}`]: data2[key] };
    }
    return { ...acc };
  }, {});

  return diff;
};
