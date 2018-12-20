import { Item } from "../core/item/item";
import { ReactNode } from "react";

export interface AppState {
    items: Array<Item<ReactNode>>
}
