interface IThreadModule {
    name: string;
    timer: number;
    callback: (...args: any[]) => boolean;
}


export { IThreadModule };
