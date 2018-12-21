import { Viewer } from "../../viewer/viewer";
import { ItemStateSwitch } from "./itemStateSwitch";
import { ItemStateConfig } from "../itemState/itemStateConfig";
import { ItemState } from "../itemState/itemState";

export class ItemStateSwitchFactory<T> {
    private readonly _viewer: Viewer<T>;

    constructor(viewer: Viewer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemStateConfig): ItemState<T> {
        return new ItemStateSwitch(this._viewer, config);
    }
}