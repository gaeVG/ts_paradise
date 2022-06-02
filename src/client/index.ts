import { default as tsp } from './client';

import { Debug } from '../core/libs/debug';

const debug = new Debug();

tsp.threads.createThread({
    name: 'isPlayerConnecting',
    timer: 1,
    callback: () => {
      if (NetworkIsPlayerActive(PlayerId())) {
        debug.debug('Player se connecting');
        DoScreenFadeOut(0);
        while (!IsScreenFadedOut()) {
          Wait(0);
        }

        tsp.events.emitNet('onPlayerJoined');

        return false;
      }
    }
})

export { tsp };
