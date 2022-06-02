

import { ICharacter } from './character';
import { IUserIdentifier } from './identifier';
import { IPlayerData } from './data';


interface IUser {
    id?: number;
    source: string;
    name: string;
    identifiers: IUserIdentifier;
    character?: ICharacter;
    data?: IPlayerData;
}


export { IUser };
