import { ReactNode } from "react";
import { ItemService } from "./item/itemService";

export interface AppProps {
    itemService: ItemService<ReactNode>;
}
