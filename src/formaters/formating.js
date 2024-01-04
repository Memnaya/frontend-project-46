import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default function doFormating(tree, format) {
  if (format === 'plain') return makePlain(tree);
  if (format === 'json') return JSON.stringify(tree);
  if (format === 'stylish') return makeStylish(tree);
  throw new Error(`Format: ${format} is not supported!`);
}
