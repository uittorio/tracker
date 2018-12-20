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

        this.state = {
            items: this.props.itemService.get()
        }
    }

	public render() {
        const items = this.state.items.map((item: Item<ReactNode>, index: number) => {
            return <div key={index} className={"App-item"}>
                <ItemComponent item={item}/>
            </div>
        });
		return (
			<div className="App">
                {items}
            </div>
		)
	}
}

export default App;

