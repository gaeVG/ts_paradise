import { Core } from '../core';

import { UserManager } from './libs/user';


class Server extends Core {

    users: UserManager;

    constructor() {
      super();

      this.users = new UserManager()
    }
}


export default new Server();
