import fs  from 'fs';
import path from 'path';
import _ from "lodash";

const getPath = fs.readFileSync(path.resolve(filepath), 'utf-8');
const getParse = JSON.parse(data);


export default (filepath1, filepath2) => {
    const data1 = getParse(getPath(filepath1));
    const data2 = getParse(getPath(filepath2));

    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2); 
  
    const result = {};
    for (const key of keys) {
      if (!Object.hasOwn(data1, key)) {
        result[key] = 'lala';
      } else if (!Object.hasOwn(data2, key)) {
        result[key] = 'lala';
      } else if (data1[key] !== data2[key]) {
        result[key] = 'lala';
      } else {
        result[key] = 'lala';
      }
    }
  
    return result;
  };
