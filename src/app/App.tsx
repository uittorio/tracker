import * as React from "react";
import './App.scss';
import { AppProps } from "./AppProps";
import { AppState } from "./AppState";
import ItemComponent from "./item/item";
import { ReactNode } from "react";
import { Item } from "../core/item/item";

import { Inject, Module } from 'react.di';
import { ItemListFactory } from "../core/item/itemListFactory";
import { ItemCountFactory } from "../core/item/itemCount/itemCountFactory";
import { ImageRepository } from "../core/imageRepository/imageRepository";
import { ItemCountReactViewComposer } from "./item/itemCount/itemCountReactViewComposer/ItemCountReactViewComposer";
import { ItemStateFactory } from "../core/item/itemState/itemStateFactory";
import { ItemStateReactViewComposer } from "./item/itemState/itemStateReactViewComposer/ItemStateReactViewComposer";
import { ItemStateSwitchFactory } from "../core/item/itemStateSwitch/itemStateSwitchFactory";
import { GameItemRepository } from "../core/game/gameItemRepository";
import { GameMultiPlayerUpdater } from "../core/game/gameMultiplayer/gameMultiPlayerUpdater";
import { GameMultiPlayerItemRepository } from "../core/game/gameMultiplayer/gameMultiplayerRepository";

@Module({
	providers: [
		ImageRepository,
		ItemCountReactViewComposer,
		ItemStateReactViewComposer,
        {
          provide: ItemCountFactory,
          useFactory: (context) => {
          	const countReactViewComposer = context.container.get(ItemCountReactViewComposer);
          	return new ItemCountFactory(countReactViewComposer);
          }
        },
		{
			provide: ItemStateFactory,
			useFactory: (context) => {
				const stateReactViewComposer = context.container.get(ItemStateReactViewComposer);
				return new ItemStateFactory(stateReactViewComposer);
			}
		},
		{
			provide: ItemStateSwitchFactory,
			useFactory: (context) => {
				const stateReactViewComposer = context.container.get(ItemStateReactViewComposer);
				return new ItemStateSwitchFactory(stateReactViewComposer);
			}
		},
		GameItemRepository,
		GameMultiPlayerItemRepository,
		GameMultiPlayerUpdater,
		ItemListFactory
	]
})
export class App extends React.Component<AppProps, AppState> {
    @Inject public itemListFactory: ItemListFactory<ReactNode>;
    @Inject public gameMultiPlayerUpdater: GameMultiPlayerUpdater<ReactNode>;
    
    public constructor(props) {
        super(props);
	
		this.state = {
			itemsList: []
		}
    
    }
	
	async componentDidMount() {
		let itemsGroup = [];
		
		for (let i =0; i < this.props.numberOfPlayers; i++) {
			itemsGroup.push(this.itemListFactory.get());
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

