import * as React from "react";
import { ReactNode } from "react";
import './App.scss';
import { AppProps } from "./AppProps";
import { AppState } from "./AppState";
import ItemComponent from "./item/item";
import { Item } from "../core/item/item";

import { Inject, Module } from 'react.di';
import { ItemListFactory } from "../core/item/itemListFactory";
import { GameConfigItem, GameItemRepository } from "../core/game/gameItemRepository";
import { GameMultiPlayerUpdater } from "../core/game/gameMultiplayer/gameMultiPlayerUpdater";
import { AppProviders } from "./AppProviders";
import { TrackerStoreFactory } from "./store/trackerStoreFactory";
import { Store } from "redux";

@Module({
	providers: AppProviders
})
export class App extends React.Component<AppProps, AppState> {
	@Inject public itemListFactory: ItemListFactory<ReactNode>;
	@Inject public gameMultiPlayerUpdater: GameMultiPlayerUpdater<ReactNode>;
	@Inject public gameItemRepository: GameItemRepository;
	
	public constructor(props) {
		super(props);
		
		this.state = {
			itemsList: []
		}
	}
	
	public componentDidMount() {
		let itemsGroup = [];
		
		const store: Store = TrackerStoreFactory.create(this.gameItemRepository, this.itemListFactory, this.props.numberOfPlayers);
		const gameItems: Array<GameConfigItem> = this.gameItemRepository.getAll();
		const items: Array<Item<ReactNode>> = this.itemListFactory.fromConfig(gameItems);
		
		for (let i = 0; i < this.props.numberOfPlayers; i++) {
			itemsGroup.push(items);
		}
		
		this.setState({
			itemsList: itemsGroup
		});
	}
	
	public render() {
		const groupItems: Array<ReactNode> = this.state.itemsList.map((itemList: Array<Item<ReactNode>>, index: number) => {
			const items: Array<ReactNode> = itemList.map((item: Item<ReactNode>) => {
				return <div key={item.id} className={"App-item"}>
					<ItemComponent item={item} onChange={(item: Item<ReactNode>) => this.updateItem(item)}/>
				</div>
			});
			
			return <div className="App-group" key={index}>
				{items}
			</div>
		});
		
		return (
			<div className="App">
				{groupItems}
			</div>
		)
	}
	
	private updateItem(item: Item<React.ReactNode>) {
		const newList: Array<Array<Item<ReactNode>>> = this.gameMultiPlayerUpdater.updateItem(item, this.state.itemsList);
		
		this.setState({
			itemsList: newList
		})
	}
}

export default App;

