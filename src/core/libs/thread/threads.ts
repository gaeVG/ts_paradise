import { uuid } from '../../utils/uuid';

import { Benchmark } from '../benchmark';
import { default as Promiser } from '../promiser';
//import { Debug } from '../debug';

import { IThreadModule } from '../../types/threads';


//const debug = new Debug();

class ThreadModule implements IThreadModule {
    identifier: string;
    name: string;
    timer: number;
    callback: (...args: any[]) => boolean;

    constructor(module: IThreadModule) {
        this.identifier = uuid();
        this.name = module.name;
        this.timer = module.timer;
        this.callback = module.callback
    }
}

class Thread {
    identifier: string;
    modules: Array<ThreadModule>;
    frequency: number;
    timer: number;
    isFull = false;

    constructor(frequency : number) {
        this.identifier = uuid();
        this.modules = [];
        this.frequency = frequency;
    }

    private async tick() : Promise<void> {
        await Promiser.delay(this.frequency);
        const threadBenchmark = new Benchmark();

        if (!this.isFull && threadBenchmark.grab() > 8) {
            this.isFull = true;
        }

        this.modules = this.modules.filter((module: ThreadModule) => {
            //debug.debug(`Execution du module "${module.name}" sur le thread "${this.identifier}"`);
            return module.callback();
        });
    }

    addOne(addModule : IThreadModule) : Thread {
        if (this.modules.length === 0) {
            this.timer = setTick(this.tick.bind(this));
        }

        if (this.timer > 8) {
            this.isFull = true;
        }
        this.modules.push(new ThreadModule(addModule));

        return this;
    }
    removeOne(putModuleIdentifier : string) : boolean {
        const modules = this.modules.filter((module) => putModuleIdentifier !== module.identifier);

        if (modules.length === this.modules.length) {
            //debug.error(`Module ${putModule.name} not found in thread ${this.identifier}`);
            return false;
        }

        this.modules = modules;

        // debug.confirm(
        //     `Module ${putModule.name} (ID: ${putModule.identifier}) removed from thread ${this.identifier}`
        // );

        return true;
    }
}

export { Thread };
