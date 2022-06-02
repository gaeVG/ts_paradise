import { IModule } from "../../types/module";

class Module implements IModule {

    name: string
    init: () => void

    constructor(module : IModule) {
        this.name = module.name;
        this.init = module.init;
    }
}

export { Module };
