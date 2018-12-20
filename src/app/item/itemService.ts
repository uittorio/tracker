import { Item } from "../../core/item/item";
import { ItemCountFactory } from "../../core/item/itemCount/itemCountFactory";
import { ItemStateFactory } from "../../core/item/itemState/itemStateFactory";
import { GameItemType } from "../../core/game/gameItemType";
import { GameConfigItem, GameItemRepository } from "../../core/game/gameItemRepository";

export class ItemService<T> {
    private _itemCountFactory: ItemCountFactory<T>;
    private _itemStateFactory: ItemStateFactory<T>;
    private _gameRepository: GameItemRepository;

    constructor(itemCountFactory: ItemCountFactory<T>, itemStateFactory: ItemStateFactory<T>, gameRepository: GameItemRepository) {
        this._itemCountFactory = itemCountFactory;
        this._itemStateFactory = itemStateFactory;
        this._gameRepository = gameRepository;
    }

    public get(): Array<Item<T>> {
        return this._convertGameList(this._gameRepository.getAll());
    }
    
    private _convertGameList(gameItemList: Array<GameConfigItem>) {
        return gameItemList.map((gameItem: GameConfigItem) => {
			const game: Item<T> = this._convertGameItem(gameItem);
		
			if (gameItem.items) {
			    const games: Array<Item<T>> = this._convertGameList(gameItem.items);
			    
			    games.forEach((gameChild: Item<T>) => {
			        game.addItem(gameChild);
                })
			}
		
			return game;
		});
    }

    private _convertGameItem(gameItem: GameConfigItem): Item<T> {
        if (gameItem.type === GameItemType.COUNT) {
            return this._itemCountFactory.create(gameItem.name);
        } else if (gameItem.type === GameItemType.STATE) {
            return this._itemStateFactory.create(gameItem.name, gameItem.states);
        } else {
            throw Error("Type not defined");
        }
    }
}