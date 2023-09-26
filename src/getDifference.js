import _ from 'lodash';

const buidTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, children: buidTree(data1[key], data2[key]) };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { type: 'unchanged', key, value: data1[key] };
    }
    return {
      type: 'changed', key, value1: data1[key], value2: data2[key],
    };
  });

  return diff;
};

const getDifferenceTree = (data1, data2) => ({
  type: 'root',
  children: buidTree(data1, data2),
});

export default getDifferenceTree;

// если нет в первом, значит точно есть во втором [`+ ${key}`]: data2[key] }
// если нет во втором значит точно есть в первом [`- ${key}`]: data1[key] }
// если есть оба ключа, но отличаются содержимым ==>
//                     [`- ${key}`]: data1[key], [`+ ${key}`]: data2[key]
//                      если одинаковые: *два пробела*${key}`]: data1[key]
