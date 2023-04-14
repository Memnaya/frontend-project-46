import { describe, test, expect } from '@jest/globals';
import doFormatting from '../src/format.js';
// import * as path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('format', () => {
  const result = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';

  test('string type', () => {
    const data = {
      '- follow': false,
      '  host': 'hexlet.io',
      '- proxy': '123.234.53.22',
      '- timeout': 50,
      '+ timeout': 20,
      '+ verbose': true,
    };
    expect(doFormatting(data)).toEqual(result);
  });
});
