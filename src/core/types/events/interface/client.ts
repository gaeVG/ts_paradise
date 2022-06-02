import { IEvent } from './event';

interface IClientEvent extends IEvent {
    playerId: string;
}

export { IClientEvent };
