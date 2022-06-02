interface IItem {
    name: string;
    label: string;
    type: string;
    amount: number;
    metadata: { [key: string]: unknown };
    use?: (...args: []) => void;
}

export { IItem };
