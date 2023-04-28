// import _ from 'lodash';

export default (data, format) => {
  let result = '';
  const keys = Object.keys(data);
  if (format === 'string') {
    keys.map((key) => {
      result += `${key}: ${data[key]}\n`;
      return result;
    });
  }
  return result.slice(0, -1);
};
