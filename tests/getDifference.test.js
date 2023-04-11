import { describe, test, expect } from '@jest/globals';
import genDiff from '../src/getDifference.js';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);


describe('flat structures', () => {

  test('json type', () => {
    const result = {
      '- follow': false,
      '  host': 'hexlet.io',
      '- proxy': '123.234.53.22',
      '- timeout': 50,
      '+ timeout': 20,
      '+ verbose': true
    }

    const file1 = 'file1.json';
    const file2 = 'file2.json';
    expect(genDiff(getFixturePath(file1), getFixturePath(file2))).toEqual(result);
  });
});