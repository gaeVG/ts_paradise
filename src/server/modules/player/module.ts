import { IModule } from '../../../core/types/module';

import { playerEvents } from './events';
import { playerThreads } from './threads';

import { tsp } from '../../../server'


const PlayerModule : IModule = {
    name: 'player',
    init() : void {
        console.log('Player module init');
        playerEvents.map((event) => onNet(event.name, function(...args : []) {
            event.handler(source, args);
        }));
        playerThreads.map((thread) => tsp.threads.createThread(thread));
    }
}


export { PlayerModule };
