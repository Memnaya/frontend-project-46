import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default function doFormating(tree, format) {
  switch (format) {
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error(`Format: ${format} is not supported!`);
  };
};