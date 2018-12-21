import { Item } from "../../item/item";
import { GameMultiplayerConfigItem } from "./gameMultiplayerRepository";

export class GameMultiplayerService<T> {
    private readonly _config: Array<GameMultiplayerConfigItem>;

    constructor(config: Array<GameMultiplayerConfigItem>) {
        this._config = config;
    }

    public updateItem(item: Item<T>, allItems: Array<Array<Item<T>>>): Array<Array<Item<T>>> {
        this._config.forEach((config: GameMultiplayerConfigItem) => {
			const configItem: GameMultiplayerConfigItem = this._searchConfigFromItem(item, config);
			if (configItem && item.isState(configItem.updateOn)) {
				return this._updateItemInConfigs(allItems, configItem, item);
			}
		});

        return allItems;
    }

    private _updateItemInConfigs(itemGroup: Array<Array<Item<T>>>, config: GameMultiplayerConfigItem, itemToCopy: Item<T>): Array<Array<Item<T>>> {
        itemGroup.forEach((itemList: Array<Item<T>>) => {
            itemList.forEach((item: Item<T>) => {
				const itemToUpdate = this._searchItemFromConfig(config, item);
				if (itemToUpdate) {
					itemToUpdate.copyState(itemToCopy);
				}
			});
        });

        return itemGroup;
    }
    
    private _searchConfigFromItem(item: Item<T>, config: GameMultiplayerConfigItem): GameMultiplayerConfigItem {
        if (item.name === config.itemId) {
            return config;
        }
        
        let result;
        
        if (config.items) {
            config.items.forEach((configItem: GameMultiplayerConfigItem) => {
                if (!result) {
					result = this._searchConfigFromItem(item, configItem);
                }
            });
            
            return result;
        }
        
        return null;
    }
	
	private _searchItemFromConfig(config: GameMultiplayerConfigItem, item: Item<T>): Item<T> {
		if (config.itemId === item.name) {
			return item;
		}
		
		let result;
		
		if (item.items) {
			item.items.forEach((itemChild: Item<T>) => {
				if (!result) {
					result = this._searchItemFromConfig(config, itemChild);
				}
			});
			
			return result;
		}
		
		return null;
	}

}