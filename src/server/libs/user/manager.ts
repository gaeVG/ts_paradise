import { Debug } from '../../../core/libs/debug';

import { User } from './user';
import { IUser } from '../../../core/types/user';

const debug = new Debug();

class UserManager {
    private manager : Array<User>;

    private init = () => {
        on('playerConnecting', this.onPlayerConnecting);
    } 
    private onPlayerConnecting (playerName: string, setKickReason: (reason: string) => void, deferrals: { defer: () => void, done: () => void, handover: () => void, presentCard: () => void, update: () => void }, source: string) : void {
        try {
            console.log(this.manager)
            const user = this.manager.find((user) => user.source === source);

            if (!user) {
                throw new Error(`UserManager: user ${playerName} already registered`);
            }

            deferrals.defer();
        } catch (error) {
            if (setKickReason) {
                debug.error(error.message);
                setKickReason(error.message);
            }

            debug.error('UserManager: Player already exists');
        }
    }

    constructor() {
        this.manager = []

        this.init();
    }

    addOne(addUser : IUser) : User | undefined {
        try {
            if (this.manager.find((userManager) => addUser.id === userManager.id)) {
                throw new Error(`UserManager: user ${addUser.id} already registered`);
            }

            const user = new User(addUser);

            this.manager.push(user);
            return user;
        } catch (error) {
            debug.error(error.message);
            return undefined;
        }
    }
    getOnebyId(id : number) : User | undefined {
        return this.manager.find((user) => user.id === id);
    }
    getOneByIdentifier(identifier : string) : User | undefined {
        return this.manager.find((user) => identifier === user.identifiers.steam);
    }
    getAll() : Array<User> {
        return this.manager;
    }
    removeOne(removeUser : IUser) : boolean {
        console.log(removeUser);
        return false;
    }
    updateOne(updateUser : IUser) : boolean {
        const userFound = false;
        const manager = this.manager.reduce((users, user) => {
            if (updateUser.id !== user.id) {
                users.push(user);
                return users;
            }

            /* Object.entries(updateUser).forEach(([key, value]) => {
                user[key] = value;
            });*/

            users.push(user);

            return users;
        }, []);

        if (!userFound) {
            debug.warning(`UserManager: user ${updateUser.id} not found`);
            return false;
        }

        this.manager = manager;

        return true;
    }
}

export { UserManager }
