class Promiser {
    delay = (ms : number) : Promise<void> => new Promise((res) => setTimeout(res, ms));
}

export { Promiser };
