import * as config from '../../game/gameConfig.json';

export interface GameConfig {
	items: Array<GameConfigItem>;
}

export interface GameConfigItem {
	uniqueId: string;
	type: string;
    resource: string;
    limit?: number;
	states?: Array<string>;
	items: Array<GameConfigItem>;
}

export class GameItemRepository {
    getAll(): Array<GameConfigItem> {
		return (config as any as GameConfig).items;
	}
}