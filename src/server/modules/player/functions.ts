import { UserIdentifierEnum } from "../../../core/types/user"


const createPlayer = (source : string) : void => {
    console.log(`createPlayer ${source}`)
}

const loadPlayer = (source : string) : void => {
    const identifier = getIdentifier(source);
    console.log(identifier)
    console.log(`loadPlayer ${source}`)
}

const getIdentifier = (source : string) : string => {
    let playerIdentifier : string
    
    getPlayerIdentifiers(source).map((identifier) =>{
        if (identifier.startsWith(UserIdentifierEnum.STEAM)) {
            playerIdentifier = identifier;
        }
    });

    return playerIdentifier;
}


export {
    createPlayer,
    loadPlayer,
    getIdentifier
}