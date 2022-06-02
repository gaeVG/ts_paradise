import { StatusEnum } from '../core/types/status';

export default {
    [StatusEnum.HUNGER]: {
        consume: 2,
        max: 1000000
    },
    [StatusEnum.THRIST]: {
        consume: 2,
        max: 1000000
    },
    [StatusEnum.ALCOHOL]: {
        consume: 2,
        max: 1000000
    },
    [StatusEnum.DRUG]: {
        consume: 2,
        max: 1000000
    }
};
