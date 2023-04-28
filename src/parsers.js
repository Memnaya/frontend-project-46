import path from 'path';
import yaml from 'js-yaml';

export default (filepath) => {
    const extension = path.extname(filepath);
    if (extension === '.json') return JSON.parse(filepath);
    if (extension === '.yaml' || extension === '.yml') return yaml.load(filepath);
    throw new Error(`Format ${extension} is not supported!`);
}