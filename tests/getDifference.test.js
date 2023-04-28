import { describe, test, expect } from '@jest/globals';
import * as path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/getDifference.js';
import parser from '../src/parsers.js';
import fs, { read } from 'fs';
import doFormating from '../src/format.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


describe('flat structures', () => {
  test('json type', () => {
    const file1 = 'file1.json';
    const file2 = 'file2.json';
    expect(genDiff(readFile(file1), readFile(file2))).toHaveProperty('- follow', false);
  });
});

// describe('format', () => {
//   const file1 = readFile('file1.json');
//   const file2 = readFile('file2.json');

//   test('string type', () => {
//     const reference = readFile('expected.json.txt');
//     expect(doFormating(genDiff(file1, file2))).toEqual(reference);
//   });
// });

 describe('parser', () => {
//   test('Have property', () => {
//     const json = readFile('file1.json');
//     expect(parser(json)).toHaveProperty('timeout', 50);
//     expect(() => parser('txt')).toThrow(Error);
//   });

  test('Not supported format', () => {
    expect(() => parser('txt')).toThrow(Error);
  });
});

// describe('baba', () => {
//   test('CHTO ETO', () => {
//     expect(parser(readFile('file1.json'))).toBe('bababa');
//   });
// });