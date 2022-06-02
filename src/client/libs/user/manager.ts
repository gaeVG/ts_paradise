import { tsp } from '../../index';
import { joaat } from '../../../core/utils/joaat';

import { IPlayerData, ICharacter } from '../../../core/types/user';
import { Player } from '@nativewrappers/client';


class PlayerManager extends Player {
    isLoaded : boolean
    data : IPlayerData
    character : ICharacter

    constructor() {
        tsp.events.onNet({
            name: 'playerConnecting',
            module: 'user',
            handler: (playerData : IPlayerData, isNew : boolean, character : ICharacter) => {
                this.isLoaded = true
                this.data = playerData
                this.character = character
                this.character.hashModel = joaat(this.character.model)
                
                while (!HasModelLoaded(this.character.model)) {
                    RequestModel(this.character.model)
                    Wait(0)
                }

                const ped = PlayerPedId()
                const coords = this.data.currentZone.coords
                TriggerServerEvent('esx:freezePlayerPed', true)
                SetPlayerModel(PlayerId(), this.character.model)
                SetModelAsNoLongerNeeded(this.character.model)
                //RequestCollisionAtCoord(coords.x, coords.y, coords.z)
                TriggerServerEvent('esx:setPlayerCoords')
                ClearPedTasksImmediately(ped)
                RemoveAllPedWeapons(ped, false)
                ClearPlayerWantedLevel(PlayerId())
                TriggerServerEvent('esx:onPlayerSpawn')
                TriggerEvent('esx:onPlayerSpawn')

                if (isNew) {
                    TriggerEvent('skinchanger:loadDefaultModel', this.character.description.sex)
                } else {
                    TriggerEvent('skinchanger:loadSkin', character.skin)
                }

                TriggerEvent('esx:loadingScreenOff')
                ShutdownLoadingScreen()
                ShutdownLoadingScreenNui()
                TriggerServerEvent('esx:freezePlayerPed', false)
                Wait(1000)
                DoScreenFadeIn(2000)
                TriggerEvent('playerSpawned', coords)
                SetCanAttackFriendly(ped, true, false)
                NetworkSetFriendlyFireOption(true)
            }
        })
        super(1);
    }
}


export { PlayerManager }
