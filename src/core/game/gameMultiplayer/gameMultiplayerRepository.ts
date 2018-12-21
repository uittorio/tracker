import * as config from '../../../game/multiplayerGameConfig.json';

export interface GameMultiplayerConfig {
    items: Array<GameMultiplayerConfigItem>;
}

export interface GameMultiplayerConfigItem {
    itemId: string;
    updateOn: string;
    items?: Array<GameMultiplayerConfigItem >;
}

export class GameMultiplayerItemRepository {
    getAll(): Array<GameMultiplayerConfigItem> {
        return (config as any as GameMultiplayerConfig).items;
    }
}