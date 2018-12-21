import { ReactNode } from "react";
import { Item } from "../core/item/item";

export interface AppState {
    itemsList: Array<Array<Item<ReactNode>>>;
}
