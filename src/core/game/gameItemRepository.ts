import * as config from '../../game/gameConfig.json';

export interface GameConfig {
	items: Array<GameConfigItem>;
}

export interface GameConfigItem {
	name: string;
	type: string;
	states?: Array<string>;
	items: Array<GameConfigItem>;
}
export class GameItemRepository {
    constructor() {}

    getAll(): Array<GameConfigItem> {
		return (config as any as GameConfig).items;
	}
}