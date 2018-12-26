import { ItemStateSwitch } from "./itemStateSwitch";
import { ItemStateConfig } from "../itemState/itemStateConfig";
import { ItemState } from "../itemState/itemState";
import { ViewComposer } from "../../viewer/viewComposer";

export class ItemStateSwitchFactory<T> {
    private readonly _viewer: ViewComposer<T>;

    constructor(viewer: ViewComposer<T>) {
        this._viewer = viewer;
    }

    create(config: ItemStateConfig): ItemState<T> {
        return new ItemStateSwitch(this._viewer, config);
    }
}