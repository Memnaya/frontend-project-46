import _ from 'lodash';

export default (data, format = 'string') => {
  let result = '';
  if (format === 'string') {
    const keys = _.sortBy(Object.keys(data));
    keys.map((key) => result += `${key}: ${data[key]}\n`);
  }
   result = result.slice(0, -1);
   return result;
};
