import { Event } from './event';
import { IEvent, EnumEventTarget } from '../../../core/types/events';

import { Debug } from '../debug'

const debug = new Debug();

class EventManager {
    manager: Array<Event>;

    private cEnv() : string {
        return GetGameName();
    }

    constructor() {
        this.manager = [];

        if (this.cEnv() === 'fivem') {
            onNet('gameEventTriggered', (name : string) => {
                console.log(name);
                //console.log(EventEnums.NativeGameEvent[name]);
            });
        }
    }

    
    getOne(eventName: string, target: string): Event | null {
        console.log(this.cEnv() === target)
        return this.manager.find((event: Event) => event.target === target && eventName === event.name);
    }
    emit(emitEventName: string, ...args: Array<unknown>) : void {
        if (this.cEnv() !== EnumEventTarget.SERVER) {
            return
        }

        debug.debug(`Recherche de l'évènement ${emitEventName}`);
        emit(emitEventName, args);
    }
    emitNet(eventName: string, target?: string, ...args: []) : void {
        if (this.cEnv() === EnumEventTarget.SERVER) {
            if (target !== undefined) {
                emitNet(eventName, target, ...args);
            } else {
                return;
            }
        } else {
            emitNet(eventName, ...args);
        }
    }
    on(newEvent: IEvent) : void {
        console.log('Création de l\'évènement ' + newEvent.name);
        if (this.cEnv() !== EnumEventTarget.CLIENT) {
            // debug.error(`L'évènement ${newEvent.name} ne peut être enregistré que côté serveur`);
            return;
        }

        const event = new Event(newEvent);
        on(event.name, () => {
            const eventSource = source
            event.addEventHandler.bind(eventSource, event);
        });

        //debug.debug(`L'évènement ${newEvent.name} est enregistré`);
    }
    onNet(newEvent: IEvent) : void {
        if (Object.entries(EnumEventTarget).find(([, value]) => value === this.cEnv())) {
            // debug.error(
            //     `Erreur à l'enregistrement de l'évènement ${newEvent.name} sur l'environnement ${newEvent.target}`
            // );
            return;
        }

        const event = new Event(newEvent);
        onNet(event.name, event.addEventHandler);

        this.manager[event.target].push(event);
    }
}


export { EventManager };
