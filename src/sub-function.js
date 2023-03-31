import _ from "lodash";
import fs  from 'fs';
import path from 'path';

const getJSONobj = (filepath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'));

export { getJSONobj };