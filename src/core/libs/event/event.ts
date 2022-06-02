import { uuid } from '../../utils/uuid';

import { IEvent } from '../../../core/types/events';

import { Debug } from '../debug'

const debug = new Debug();


class Event {
    identifier: string;
    name : string;
    module: string;
    target: string;

    handler: (...args: unknown[]) => void;

    constructor(event : IEvent) {
        this.identifier = uuid();
        this.name = event.name;
        this.module = event.module;
        this.target = event.target;

        this.handler = event.handler;
    }

    addEventHandler(identifier: string, args: (...args: unknown[]) => void) : void {

        if (identifier !== this.identifier) {
            debug.warning(`Identifiant de l'évènement invalide`);
            return;
        }
        
        debug.debug(`Déclenchement de l'évènement ${this.name}`);
        this.handler(source, args);
    }
}


export { Event };
