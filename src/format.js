// import _ from 'lodash';

export default (data, format = 'string') => {
  let result = '';
  if (format === 'string') {
    const keys = Object.keys(data);
    keys.map((key) => result += `${key}: ${data[key]}\n`);
  }
  return result.slice(0, -1);
};
