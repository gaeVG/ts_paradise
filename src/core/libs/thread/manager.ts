import { IThread } from '../../types/threads';
import { Thread } from './threads';

import { Debug } from '../debug';

const debug = new Debug();


class ThreadManager {

    private manager: Array<Thread>;

    constructor() {
        this.manager = [];
    }

    createThread(newThread : IThread) : void {
        debug.debug(`Création du thread "${newThread.name}"`);
        let threadFound = false;
        const currentThread = this.manager.find((thread) => {
            threadFound = newThread.timer === thread.frequency;
            return threadFound;
        }) || new Thread(newThread.timer);

        if (!threadFound) {
            this.manager.push(currentThread);
        }

        if (currentThread.isFull) {
            debug.debug(`Le thread "${newThread.name}" est plein`);
        } else {
            currentThread.addOne(newThread);
        }
    }
}

export { ThreadManager };
