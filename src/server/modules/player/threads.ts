import { IThread } from '../../../core/types/threads';

import { tsp } from '../../../server';


const playerThreads : Array<IThread> = [
    {
        name: 'playerTick',
        timer: 1000,
        callback: () : boolean => {
            tsp.users.getAll().map((user) => {
                console.log(user.name)
            });

            return true
        }
    }
];


export { playerThreads };
