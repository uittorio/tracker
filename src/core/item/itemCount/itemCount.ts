import { Viewer } from "../../viewer/viewer";
import { State } from "../../state/state";
import { Item } from "../item";

export class ItemCount<T> implements Item<T> {
    private _currentStateCount: number;
    private _viewer: Viewer<T>;
    private readonly _name: string;
    public items: Array<Item<T>> = [];

    constructor(viewer: Viewer<T>, name: string) {
        this._viewer = viewer;
        this._name = name;
        this._currentStateCount = 0;
    }

    nextState() {
        this._currentStateCount++
    }

    prevState() {
        if (this._currentStateCount) {
            this._currentStateCount--;
        }
    }

    isEmpty(): boolean {
        return !this._currentStateCount;
    }

    getCurrentStateView():T {
        const state: State = new State(this._currentStateCount.toString());

        return this._viewer.getViewFromState(state, this._name);
    }

    addItem(item: Item<T>): void {
        this.items.push(item);
    }
}