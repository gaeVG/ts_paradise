import { Debug } from '../debug';

import { Callback } from './callback';
import { ICallback } from '../../types/callback';

const debug = new Debug();


class CallbackManager {

    manager: Callback[]

    constructor() {
        this.manager = [];
    }

    addOne(addCallback : ICallback) : string | null {
        if (!this.manager.find((callbackManager) => addCallback.name === callbackManager.name)) {
            const callback = new Callback(addCallback);
            debug.debug('Callback added');
            this.manager.push(callback);

            return callback.identifier;
        }

        return null;
    }

    getOne(getCallback : string) : Callback | null {
        const callback = this.manager.find((callbackManager) => [callbackManager.name, callbackManager.identifier].includes(getCallback));
        if (!callback) {
            //debug.warning(`Callback ${getCallback.name} not found on ${getCallback.module} module`);
            return null;
        }

        return callback;
    }

    getAll() : Array<Callback>{
        return this.manager;
    }
    /**
     * @param {Array<{ name: string, module: string, handler: () => void }> | { name: string, module: string, handler: () => void }} callbackRegister Callback to register
     * @returns {boolean} Return
     */
    registerCallback(callbackRegister : Array<ICallback> | ICallback) : void /* Array<ICallback> */ {
        //return Array.isArray(callbackRegister) ? callbackRegister.filter((callback) => this.addOne(callback)) : this.addOne(callbackRegister);
    }
}

export { CallbackManager }