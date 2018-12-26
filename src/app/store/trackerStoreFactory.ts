import { ItemListFactory } from "../../core/item/itemListFactory";
import { createStore, Store } from "redux";
import trackerReducer from "./reducer/trackerReducer";
import { GameConfigItem, GameItemRepository } from "../../core/game/gameItemRepository";
import { ReactNode } from "react";
import { Item } from "../../core/item/item";

export class TrackerStoreFactory {
	static create<T>(gameItemRepository: GameItemRepository, itemListFactory: ItemListFactory<T>, numberOfPlayers: number): Store {
		const gameItems: Array<GameConfigItem> = gameItemRepository.getAll();
		const items: Array<Item<ReactNode>> = itemListFactory.fromConfig(gameItems);
		const itemsGroup: Array<Array<Item<ReactNode>>> = [];
		
		for (let i = 0; i < numberOfPlayers; i++) {
			itemsGroup.push(items);
		}
		
		return createStore(trackerReducer, itemsGroup);
	}
}

