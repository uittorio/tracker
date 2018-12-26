import * as config from '../../game/gameConfig.json';
import { Inject, Injectable } from "react.di";

export interface GameConfig {
	items: Array<GameConfigItem>;
}

export interface GameConfigItem {
	id: string;
	type: string;
    resource: string;
    limit?: number;
	states?: Array<string>;
	items: Array<GameConfigItem>;
}

@Injectable
export class GameItemRepository {
    getAll(): Array<GameConfigItem> {
		return (config as any as GameConfig).items;
	}
}