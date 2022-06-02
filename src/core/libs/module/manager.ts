import { IModule } from '../../types/module';
import { Module } from './module';


class ModuleManager {
    private manager : Array<Module>

    constructor() {
        this.manager = [];
    }

    loadModules(modules : IModule[]) : void {
        console.log('Chargement des modules')
        console.log(modules.length)
        modules.map((module) => {
            if (!this.manager.find((m) => m.name === module.name)) {
                const moduleInstance = new Module(module);
                this.manager.push(moduleInstance);

                moduleInstance.init();
            }
        })
    }
}


export { ModuleManager };
