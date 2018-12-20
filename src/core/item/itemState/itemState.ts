import { Viewer } from "../../viewer/viewer";
import { State } from "../../state/state";
import { Item } from "../item";

export class ItemState<T> implements Item<T> {
    public items: Array<Item<T>> = [];
    private _viewer: Viewer<T>;
    private readonly _name: string;
    private readonly _states: Array<string>;
    private _currentStateNumber: number;

    constructor(viewer: Viewer<T>, name: string, states: Array<string>) {
        this._viewer = viewer;
        this._name = name;
        this._states = [states[0], ...states];
        this._currentStateNumber = 0;
    }

    nextState() {
        if (this._currentStateNumber >= this._states.length - 1) {
            this._currentStateNumber = 0;
        } else {
            this._currentStateNumber++;
        }
    }

    prevState() {
        if (this._currentStateNumber <= 0) {
            this._currentStateNumber = this._states.length - 1
        } else {
            this._currentStateNumber--;
        }
    }

    isEmpty(): boolean {
        return !this._currentStateNumber;
    }

    getCurrentStateView(): T {
        const state: State = new State(this._states[this._currentStateNumber]);

        return this._viewer.getViewFromState(state, this._name);
    }

    addItem(item: Item<T>) {
        this.items.push(item);
    }

}