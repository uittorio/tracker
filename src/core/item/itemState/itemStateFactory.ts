import { Viewer } from "../../viewer/viewer";
import { ItemState } from "./itemState";
import { ItemStateConfig } from "./itemStateConfig";

export class ItemStateFactory<T> {
    private readonly _viewer: Viewer<T>;

    constructor(viewer: Viewer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemStateConfig): ItemState<T> {
        return new ItemState(this._viewer, config);
    }
}