import * as React from "react";
import './App.scss';
import { AppProps } from "./AppProps";
import { AppState } from "./AppState";
import ItemComponent from "./item/item";
import { ReactNode } from "react";
import { Item } from "../core/item/item";

export class App extends React.Component<AppProps, AppState> {
    public constructor(props) {
        super(props);

        let itemsGroup = [];
        for (let i =0; i < this.props.numberOfPlayers; i++) {
            itemsGroup.push(this.props.itemService.get());
        }

        this.state = {
            itemsList: itemsGroup
        }
    }

	public render() {
        const groupItems: Array<ReactNode> = this.state.itemsList.map((itemList: Array<Item<ReactNode>>, index: number) => {
            const items: Array<ReactNode> = itemList.map((item: Item<ReactNode>) => {
                return <div key={item.name} className={"App-item"}>
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
       const newList: Array<Array<Item<ReactNode>>> = this.props.gameMultiPlayerService.updateItem(item, this.state.itemsList);

       console.log(newList);
       this.setState({
           itemsList: newList
       })
    }
}

export default App;

