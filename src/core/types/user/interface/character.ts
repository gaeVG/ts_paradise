import { ISkin } from './skin';

interface ICharacterDescription {
    lastname : string;
    firstname : string;
    age : number;
    sex : 'M' | 'F' | 'T';
}

interface ICharacter {
    characterId : number;
    description : ICharacterDescription;
    model : 'mp_m_freemode_01' | 'mp_f_freemode_01'
    hashModel? : number
    skin : ISkin;
}


export { ICharacter, ICharacterDescription };
