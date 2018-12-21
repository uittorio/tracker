import { Viewer } from "../../viewer/viewer";
import { ItemCount } from "./itemCount";
import { ItemCountConfig } from "./itemCountConfig";

export class ItemCountFactory<T> {
    private readonly _viewer: Viewer<T>;

    constructor(viewer: Viewer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemCountConfig): ItemCount<T> {
        return new ItemCount(this._viewer, config);
    }
}