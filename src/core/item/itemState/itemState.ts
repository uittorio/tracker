import { Viewer } from "../../viewer/viewer";
import { State } from "../../state/state";
import { Item } from "../item";
import { ItemStateConfig } from "./itemStateConfig";

export class ItemState<T> implements Item<T> {
    public items: Array<Item<T>> = [];
    public name: string;
    public resource: string;
    private _viewer: Viewer<T>;
    protected _states: Array<string>;
    protected _currentStateNumber: number;

    constructor(viewer: Viewer<T>, config: ItemStateConfig) {
        this.name = config.name;
        this.resource = config.resource;
        this._viewer = viewer;
        this._states = [config.states[0], ...config.states];
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

        return this._viewer.getViewFromState(state, this.resource);
    }

    addItem(item: Item<T>) {
        this.items.push(item);
    }

    isState(updateOn: string): boolean {
        if (updateOn === "EMPTY") {
            return this.isEmpty();
        }

        return false;
    }

    getCurrentState(): number {
        return this._currentStateNumber;
    }

    copyState(itemToCopy: Item<T>): void {
        this._currentStateNumber = itemToCopy.getCurrentState();
    }

}