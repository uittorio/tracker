import { Item } from "../../item/item";
import { GameMultiplayerConfigItem, GameMultiPlayerItemRepository } from "./gameMultiplayerRepository";
import { Inject, Injectable } from "react.di";

@Injectable
export class GameMultiPlayerUpdater<T> {
	@Inject gameMultiPlayerItemRepository: GameMultiPlayerItemRepository;
	private readonly _config: Array<GameMultiplayerConfigItem>;
	
	constructor(gameMultiPlayerItemRepository: GameMultiPlayerItemRepository) {
		this._config = gameMultiPlayerItemRepository.getAll();
	}
	
	public updateItem(item: Item<T>, allItems: Array<Array<Item<T>>>): Array<Array<Item<T>>> {
		const config: GameMultiplayerConfigItem = this._searchConfigFromItem(item);
		
		if (config && item.isState(config.updateOn)) {
			this._updateAllItems(allItems, item);
		}
		
		return allItems;
	}
	
	private _updateAllItems(itemGroup: Array<Array<Item<T>>>, itemToCopy: Item<T>): Array<Array<Item<T>>> {
		itemGroup.forEach((itemList: Array<Item<T>>) => {
			itemList.forEach((item: Item<T>) => {
				const itemToUpdate = this._searchItemFromConfig(itemToCopy.id, item);
				if (itemToUpdate) {
					itemToUpdate.copyState(itemToCopy);
				}
			});
		});
		
		return itemGroup;
	}
	
	private _searchConfigFromItem(item: Item<T>): GameMultiplayerConfigItem {
		return this._config.find((config: GameMultiplayerConfigItem) => {
			return config.itemId === item.id
		});
	}
	
	private _searchItemFromConfig(id: string, item: Item<T>): Item<T> {
		if (id === item.id) {
			return item;
		}
		
		if (item.items) {
			let result;
			
			item.items.forEach((itemChild: Item<T>) => {
				if (!result) {
					result = this._searchItemFromConfig(id, itemChild);
				}
			});
			
			return result;
		}
		
		return null;
	}
	
}