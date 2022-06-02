import { default as tsp } from './config';
import { default as status } from './status';
import { default as database } from './database';

export default { ...tsp, database, status };
