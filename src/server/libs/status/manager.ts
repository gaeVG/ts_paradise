import { Status } from './status';
import { IStatus } from '../../../core/types/status';

class StatusManager {
    private manager : Array<Status>

    constructor() {
        this.manager = [];
    }

    addOne(userStatus : IStatus) : Status | boolean {
        try {
            if (this.manager.find((statusManager) => userStatus.name === statusManager.name)) {
                throw new Error(`StatusManager: status ${userStatus.name} already exists`);
            }

            const status = new Status(userStatus);
            this.manager.push(status);
            return status;
        } catch (error) {
            return false;
        }
    }
    getOne(statusName : string) : Status | null {
        return this.manager.find((managerStatus) => statusName === managerStatus.name);
    }
    updateOne(status : Status, value : unknown) : boolean {
        let statusFound = false;

        try {
            this.manager = this.manager.reduce((statusManager : Array<Status>, currentStatus : Status) => {

                if (status.identifier === currentStatus.identifier) {
                    statusFound = true;
                    currentStatus.value = value;
                    statusManager.push(currentStatus);
                }

                return statusManager;
            }, []);

            if (!statusFound) {
                throw new Error(`StatusManager: status ${status.name} not found`);
            }

            return true;
        } catch (error) {
            return error;
        }
    }
    removeOne(userStatus : IStatus) : boolean {
        let statusFound = false;

        try {
            const manager = this.manager.reduce((statusManager, userStatusManager) => {
                if (userStatus.name === userStatusManager.name) {
                    statusFound = true;
                    statusManager.push(userStatusManager);
                }

                return statusManager;
            }, []);

            if (!statusFound) {
                throw new Error(`StatusManager: status ${userStatus.name} not found`);
            }

            this.manager = manager;

            return true;
        } catch (error) {
            return false;
        }
    }
}

export { StatusManager };
