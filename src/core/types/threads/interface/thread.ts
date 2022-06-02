interface IThread {
    name: string;
    timer: number;
    callback: (...args : []) => boolean;
}

export { IThread };
