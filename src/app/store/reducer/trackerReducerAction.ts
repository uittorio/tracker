import { ACTION_ITEMS } from "../action/action-types";
import { Item } from "../../../core/item/item";

export interface TrackerReducerAction<T> {
	type: ACTION_ITEMS;
	payload: Item<T>;
}