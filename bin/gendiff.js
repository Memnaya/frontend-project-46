#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../index.js';
import doFormatting from '../src/format.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
   .action((filepath1, filepath2) => {
    console.log(doFormatting(gendiff(filepath1, filepath2)));
   });

program.parse(process.argv);
