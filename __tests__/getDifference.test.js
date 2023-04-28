import { describe, test, expect } from '@jest/globals';
import * as path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import getDifference from '../src/getDifference';
import parser from '../src/parsers.js';
import doFormating from '../src/format.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('flat structures', () => {
  test('json type', () => {
    const file1 = parser(readFile('file1.json'), 'json');
    const file2 = parser(readFile('file2.json'), 'json');
    expect(getDifference(file1, file2)).toHaveProperty('+ timeout', 20);
  });
  test('yaml/yml type', () => {
    const file1 = parser(readFile('file1.yaml'), 'yaml');
    const file2 = parser(readFile('file2.yaml'), 'yaml');
    expect(getDifference(file1, file2)).toHaveProperty('+ timeout', 20);
  });
});

describe('style', () => {
  test('string type', () => {
    const file1 = parser(readFile('file1.json'), 'json');
    const file2 = parser(readFile('file2.json'), 'json');
    const reference = readFile('expected.json.txt');
    expect(doFormating(getDifference(file1, file2), 'string')).toEqual(reference);
  });
});

describe('parser', () => {
  test('Have property', () => {
    const json = readFile('file1.json');
    expect(parser(json, 'json')).toHaveProperty('timeout', 50);
  });

  test('Not supported format', () => {
    expect(() => parser('txt')).toThrow(Error);
  });
});
