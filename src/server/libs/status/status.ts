import { uuid } from '../../../core/utils/uuid';

import { IStatus } from '../../../core/types/status';


class Status implements IStatus {
    identifier: string;
    name: string
    value: unknown
    min: number
    max: number
    consume: number
    duration: number;
    callback: (...args : []) => void;
    callnext: (...args : []) => void;

    constructor(status : IStatus) {
        this.identifier = uuid();
        this.name = status.name;
        this.value = status.value;
        this.consume = status.consume;
        this.min = status.min;
        this.max = status.max;
        this.duration = status.duration;
        this.callback = status.callback;
        this.callnext = status.callnext;
    }
}

export { Status };
