import { Item } from "../item";
import { ItemCountConfig } from "./itemCountConfig";
import { ViewComposer } from "../../viewer/viewComposer";

export class ItemCount<T> implements Item<T> {
    public items: Array<Item<T>> = [];
    public id: string;
    public resource: string;
    private _currentStateCount: number;
    private _viewer: ViewComposer<T>;
    private readonly _limit: number;

    constructor(viewer: ViewComposer<T>, config: ItemCountConfig) {
        this.id = config.id;
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

    getCurrentStateView(): T {
        return this._viewer.compose(this.resource, this._currentStateCount.toString());
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