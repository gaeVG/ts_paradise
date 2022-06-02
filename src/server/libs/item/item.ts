import { IItem } from '../../../core/types/item';
import { UsableItems } from './usable';


class Item implements IItem {
    name: string
    label: string
    type: string
    amount: number
    metadata: { [key: string]: unknown }
    use?: (...args: []) => void

    constructor(item : IItem) {
        this.name = item.name;
        this.label = item.label;
        this.type = item.type;
        this.amount = item.amount;
        this.metadata = item.metadata;

        if (UsableItems[item.name]) {
            this.use = UsableItems[item.name].use;
        }
    }
}


export { Item };
