import { Viewer } from "../../viewer/viewer";
import { ItemCount } from "./itemCount";

export class ItemCountFactory<T> {
    private readonly _viewer: Viewer<T>;

    constructor(viewer: Viewer<T>) {
        this._viewer = viewer;
    }

    create(name: string): ItemCount<T> {
        return new ItemCount(this._viewer, name);
    }
}