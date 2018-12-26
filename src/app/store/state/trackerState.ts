import { Item } from "../../../core/item/item";

export interface TrackerState<T> {
	groupListOfItems: Array<Array<Item<T>>>;
}