import * as config from '../../../game/multiplayerGameConfig.json';
import { Injectable } from "react.di";

export interface GameMultiplayerConfig {
    items: Array<GameMultiplayerConfigItem>;
}

export interface GameMultiplayerConfigItem {
    itemId: string;
    updateOn: string;
}

@Injectable
export class GameMultiPlayerItemRepository {
    getAll(): Array<GameMultiplayerConfigItem> {
        return (config as any as GameMultiplayerConfig).items;
    }
}