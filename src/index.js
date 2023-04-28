import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import getDifference from './getDifference.js';
import process from 'process';
import yaml from 'js-yaml';
import doFormating from './format.js';

// Черновой, но рабочий при ручном тестировании, код

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

const getDiff = (filepath1, filepath2) => {
    const getData =(filepath) => {
        const extension = path.extname(filepath);
            if (extension === '.json') return JSON.parse(readFile(filepath));
            if (extension === '.yaml' || extension === '.yml') return yaml.load(readFile(filepath));
            throw new Error(`Format ${extension} is not supported!`);
    }

 
    const data1 = getData(filepath1);
    const data2 = getData(filepath2);
    
    const genDiff = getDifference(data1, data2);
    const stylish = doFormating(genDiff);

    return stylish;
    
}

export default getDiff;

// import doFormating from './format.js';
// import fs from 'fs';
// import path from 'path';
// import parser from './parsers.js';
// import getDifference from './getDifference.js';
// import process from 'process';

// const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
// const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');
// const getData = (filepath) => parser(readFile(getFullPath(filepath)));

// const getDiff = (filepath1, filepath2) => {
//     const data1 = getData(filepath1);
//     const data2 = getData(filepath2);


//     const diff = getDifference(data1, data2);
//     const stylish = doFormating(diff);
//     return stylish;
// }

// export default getDiff;