import { default as tsp } from './server';

import modules from './modules';


tsp.modules.loadModules(modules);


export { tsp };