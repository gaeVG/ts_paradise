import { Player } from 'fivem-js';
import { ICharacter, IPlayerData, IUser, IUserIdentifier, UserIdentifierEnum } from '../../../core/types/user'


class User extends Player implements IUser {
    id: number
    source: string
    name: string
    identifiers: IUserIdentifier;
    character?: ICharacter;
    data: IPlayerData;

    constructor(user : IUser) {
        super(parseInt(user.source));
        this.id = user.id;
        this.identifiers = getPlayerIdentifiers(this.id).reduce((identifiers, identifier) => {
            if (identifier.startsWith(UserIdentifierEnum.STEAM)) {
                identifiers.steam = identifier;
            } else if (identifier.startsWith(UserIdentifierEnum.FIVEM)) {
                identifiers.fivem = identifier;
            } else if (identifier.startsWith(UserIdentifierEnum.DISCORD)) {
                identifiers.discord = identifier;
            }

            return identifiers;
        }, { fivem: '', steam: '', discord: '' });

        this.character = user.character;
        this.data = {
            inventories: [],
            accounts: [],
            jobs: [],
            organisations: [],
            status: [],
            currentZone: null
        };
    }

    isAdmin() : boolean {
        return false;
    }
    showNotification(message : string) : void {
        console.log(message);
    }
}


export { User };
