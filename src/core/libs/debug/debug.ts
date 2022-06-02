// import { default as config } from '../../../config';
import { ColorConsoleEnum } from '../../types/colors'

import { default as config } from '../../../config'

class Debug {
    isServer() : boolean {
        return GetGameName() === 'fxserver';
    }
    debug(message : string) : void {
        config.debug && console.log(`${this.isServer() ? ColorConsoleEnum.BLUE : ''}[debug] ${message} ${this.isServer() ? ColorConsoleEnum.RESET : ''}`, );
    }
    error(message : string) : void {
        config.showErrors || (config.debug && console.log(`${ColorConsoleEnum.RED}[ERROR] ${message}`, ColorConsoleEnum.RESET));
    }
    warning(message : string) : void {
        config.showErrors || (config.debug && console.log(`${ColorConsoleEnum.YELLOW}[WARNING] ${message}`, ColorConsoleEnum.RESET));
    }
    confirm(message : string) : void {
        config.debug && console.log(`${ColorConsoleEnum.GREEN} ${message}`, ColorConsoleEnum.RESET);
    }
}

export { Debug };
