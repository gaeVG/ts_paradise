import { IInventory } from '../../inventory';
import { IStatus } from '../../status';
import { IZone } from '../../zone';

interface IPlayerData {
    inventories: Array<IInventory>;
    accounts: [];
    jobs: [];
    organisations: [];
    status: Array<IStatus>;
    currentZone: IZone;
}

export { IPlayerData };
