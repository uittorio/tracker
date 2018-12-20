export class State {
    private _value: string;

    constructor(value: string) {
        this._value = value;
    }

    getValue(): string {
        return this._value;
    }

    static create(value: string): State {
        return new State(value);
    }
}