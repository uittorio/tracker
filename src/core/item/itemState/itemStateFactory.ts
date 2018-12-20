import { Viewer } from "../../viewer/viewer";
import { ItemState } from "./itemState";

export class ItemStateFactory<T> {
    private readonly _viewer: Viewer<T>;

    constructor(viewer: Viewer<T>) {
        this._viewer = viewer;
    }

    create(name: string, states: Array<string>): ItemState<T> {
        return new ItemState(this._viewer, name, states);
    }
}