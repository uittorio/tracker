import { ItemCount } from "./itemCount";
import { ItemCountConfig } from "./itemCountConfig";
import { ViewComposer } from "../../viewer/viewComposer";
import { Injectable } from "react.di";

@Injectable
export class ItemCountFactory<T> {
    private readonly _viewer: ViewComposer<T>;

    constructor(viewer: ViewComposer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemCountConfig): ItemCount<T> {
        return new ItemCount(this._viewer, config);
    }
}