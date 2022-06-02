import { IItem } from '../../item';
import { IContainer } from './container';

interface IInventory {
    name: string;
    container: IContainer;
    items: IItem[];
}

export { IInventory };
