import { Viewer } from "../../viewer/viewer";
import { State } from "../../state/state";
import { Item } from "../item";
import { ItemCountConfig } from "./itemCountConfig";

export class ItemCount<T> implements Item<T> {
    public items: Array<Item<T>> = [];
    public name: string;
    public resource: string;
    private _currentStateCount: number;
    private _viewer: Viewer<T>;
    private readonly _limit: number;

    constructor(viewer: Viewer<T>, config: ItemCountConfig) {
        this.name = config.name;
        this.resource = config.resource;
        this._viewer = viewer;
        this._limit = config.limit;
        this._currentStateCount = 0;
    }

    nextState() {
        if (this._currentStateCount < this._limit) {
            this._currentStateCount++
        }
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

        return this._viewer.getViewFromState(state, this.resource);
    }

    addItem(item: Item<T>): void {
        this.items.push(item);
    }

    isState(updateOn: string): boolean {
        if (updateOn === "EMPTY") {
            return this.isEmpty();
        }

        return false;
    }

    copyState(itemToCopy: Item<T>): void {
        this._currentStateCount = itemToCopy.getCurrentState();
    }

    getCurrentState() {
        return this._currentStateCount;
    }
}