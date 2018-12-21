import { ItemService } from "../core/item/itemService";
import { ReactNode } from "react";
import { GameMultiplayerService } from "../core/game/gameMultiplayer/gameMultiplayerService";

export interface AppProps {
    numberOfPlayers: number;
    itemService: ItemService<ReactNode>;
    gameMultiPlayerService: GameMultiplayerService<ReactNode>;
}
