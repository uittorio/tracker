import { ItemState } from "./itemState";
import { ItemStateConfig } from "./itemStateConfig";
import { ViewComposer } from "../../viewer/viewComposer";

export class ItemStateFactory<T> {
    private readonly _viewer: ViewComposer<T>;

    constructor(viewer: ViewComposer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemStateConfig): ItemState<T> {
        return new ItemState(this._viewer, config);
    }
}