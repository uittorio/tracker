import { Item } from "../item";
import { ItemState } from "../itemState/itemState";
import { ItemStateConfig } from "../itemState/itemStateConfig";
import { ViewComposer } from "../../viewer/viewComposer";

export class ItemStateSwitch<T> extends ItemState<T> implements Item<T> {
    public items: Array<Item<T>> = [];

    constructor(viewer: ViewComposer<T>, config: ItemStateConfig) {
        super(viewer, config);
        this._states = config.states.reduce((acc: Array<string>, state: string) => {
            acc.push(state);
            acc.push(state);
            return acc;
        }, []);

        this._states.unshift("unknown");
    }

    isEmpty(): boolean {
        return this._currentStateNumber % 2 !== 0 || this._currentStateNumber === 0;
    }
}