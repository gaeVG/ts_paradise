interface IEvent {
    name: string;
    module: string;
    target?: string;

    handler: (...args: unknown[]) => void;
}

export { IEvent };
