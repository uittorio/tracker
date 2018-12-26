import { ACTION_ITEMS } from "./action-types";
import { Item } from "../../../core/item/item";

export const update = <T>(item: Item<T>) => ({
	type: ACTION_ITEMS.UPDATE, payload: item
});