import { EventManager } from './libs/event';
import { ModuleManager } from './libs/module';
import { ThreadManager } from './libs/thread';
import { CallbackManager } from './libs/callback';

import { Debug } from './libs/debug';


class Core {
    readonly events: EventManager;
    readonly modules: ModuleManager;
    readonly threads: ThreadManager;
    readonly callbacks: CallbackManager;

    readonly debug: Debug;

    constructor() {
        this.events = new EventManager();
        this.modules = new ModuleManager();
        this.threads = new ThreadManager();
        this.callbacks = new CallbackManager();

        this.debug = new Debug();
    }
}

export { Core };
