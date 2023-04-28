import fs from 'fs';
import path from 'path';
import process from 'process';
import doFormating from './format.js';
import parser from './parsers.js';
import getDifference from './getDifference.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parser(fs.readFileSync(getFullPath(filepath), 'utf8'), getFormat(filepath));

const calcDiff = (filepath1, filepath2, format = 'string') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const diff = getDifference(data1, data2);
  return doFormating(diff, format);
};

export default calcDiff;
