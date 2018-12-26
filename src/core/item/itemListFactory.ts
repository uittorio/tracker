import { Item } from "./item";
import { ItemCountFactory } from "./itemCount/itemCountFactory";
import { ItemStateFactory } from "./itemState/itemStateFactory";
import { GameItemType } from "../game/gameItemType";
import { GameConfigItem, GameItemRepository } from "../game/gameItemRepository";
import { ItemStateSwitchFactory } from "./itemStateSwitch/itemStateSwitchFactory";
import { Inject, Injectable } from "react.di";

@Injectable
export class ItemListFactory<T> {
	@Inject private _itemCountFactory: ItemCountFactory<T>;
	@Inject private _itemStateFactory: ItemStateFactory<T>;
	@Inject private _gameRepository: GameItemRepository;
	@Inject private _itemStateSwitchFactory: ItemStateSwitchFactory<T>;

    constructor(itemCountFactory: ItemCountFactory<T>,
                itemStateFactory: ItemStateFactory<T>,
                itemStateSwitchFactory: ItemStateSwitchFactory<T>,
                gameRepository: GameItemRepository) {
        this._itemCountFactory = itemCountFactory;
        this._itemStateFactory = itemStateFactory;
        this._itemStateSwitchFactory = itemStateSwitchFactory;
        this._gameRepository = gameRepository;
    }

    public get(): Array<Item<T>> {
        return this._convertGameList(this._gameRepository.getAll());
    }
	
	public fromConfig(config: Array<GameConfigItem>): Array<Item<T>> {
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
            return this._itemCountFactory.create({
                id: gameItem.id,
                limit: gameItem.limit || Infinity,
                resource: gameItem.resource
            });
        } else if (gameItem.type === GameItemType.STATE) {
            return this._itemStateFactory.create({
                id: gameItem.id,
                states: gameItem.states,
                resource: gameItem.resource
            });
        } else if (gameItem.type === GameItemType.STATE_SWITCH) {
            return this._itemStateSwitchFactory.create({
                id: gameItem.id,
                states: gameItem.states,
                resource: gameItem.resource
            });
        } else {
            throw Error("Type not defined");
        }
    }
}