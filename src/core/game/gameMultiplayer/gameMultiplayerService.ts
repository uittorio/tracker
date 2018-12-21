import { Item } from "../../item/item";
import { GameMultiplayerConfigItem } from "./gameMultiplayerRepository";

export class GameMultiplayerService<T> {
    private readonly _config: Array<GameMultiplayerConfigItem>;

    constructor(config: Array<GameMultiplayerConfigItem>) {
        this._config = config;
    }

    public updateItem(item: Item<T>, allItems: Array<Array<Item<T>>>): Array<Array<Item<T>>> {
        const configItem: GameMultiplayerConfigItem = this._findConfigFromItem(item, this._config);

        if (configItem && item.isState(configItem.updateOn)) {
            return this._updateItemInConfigs(allItems, configItem, item);
        }

        return allItems;
    }

    private _findConfigFromItem(item: Item<T>, configList: Array<GameMultiplayerConfigItem>): GameMultiplayerConfigItem {
        return configList.find((config: GameMultiplayerConfigItem) => {
            return config.itemId === item.name || !!this._findConfigFromItem(item, config.items);
        });
    }

    private _updateItemInConfigs(itemGroup: Array<Array<Item<T>>>, config: GameMultiplayerConfigItem, itemToCopy: Item<T>): Array<Array<Item<T>>> {
        itemGroup.forEach((itemList: Array<Item<T>>) => {
            const itemToUpdate = this._findItemFromConfig(itemList, config);

            if (itemToUpdate) {
               itemToUpdate.copyState(itemToCopy);
            }
        });

        return itemGroup;
    }

    private _findItemFromConfig(itemList: Array<Item<T>>, config: GameMultiplayerConfigItem) {
        return itemList.find((item: Item<T>) => {
            return config.itemId === item.name || !!this._findItemFromConfig(item.items, config);
        });
    }
}