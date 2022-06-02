import { PrismaClient } from "@prisma/client";

import { IEvent } from "../../../core/types/events";

import { loadPlayer, getIdentifier  } from "./functions";

import { tsp } from '../../../server';

const prisma = new PrismaClient()

const playerEvents : Array<IEvent> = [
    {
        name: 'onPlayerJoined',
        module: 'player',
        handler: async (source : string) : Promise<void> => {
            const identifier = getIdentifier(source);
    
            if (identifier) {
                if (tsp.users.getOneByIdentifier(identifier)) {
                    DropPlayer(source, 'Player already exists');
                } else {
                    console.log('Il va falloir intéroger la base de données');
                    const allUsers = await prisma.user.findMany();
                    console.log(allUsers);
                    loadPlayer(source);
                }
            } else {
                DropPlayer(source, 'Missing identifier');
            }
        }
    }
]


export { playerEvents };
