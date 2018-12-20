import * as React from "react";
import "./item.scss";
import { ReactNode } from "react";
import { Item } from "../../core/item/item";

interface ItemState {
    view: ReactNode;
    buttonClass: string;
}

export interface ItemProps {
    item: Item<ReactNode>;
}

export class ItemComponent extends React.Component<ItemProps, ItemState> {
    constructor(props) {
        super(props);

        this.state = {
            view: this.props.item.getCurrentStateView(),
            buttonClass:  this._getButtonClass()
        }
    }

    public render() {
        const childItems: Array<JSX.Element>= this.props.item.items.map((item: Item<ReactNode>, index: number) => {
           return <div className={"Item-child"} key={index}>
               <ItemComponent item={item}/>
           </div>
        });
        return (
            <div className={"Item-content"}>
                <button className={this.state.buttonClass}
                        onClick={() => this.onLeftClick()}
                        onContextMenu={() => this.onRightClick()}>
                    {this.state.view}
                </button>
                <div className={"Item-children"}>
                    {childItems}
                </div>
            </div>
        )
    }

    onLeftClick() {
        this.props.item.nextState();
        this._updateView();
    }

    onRightClick() {
        this.props.item.prevState();
        this._updateView();
    }

    _updateView() {
        this.setState({
            view: this.props.item.getCurrentStateView(),
            buttonClass: this._getButtonClass()
        });
    }

    _getButtonClass() {
        const isEmpty: boolean = this.props.item.isEmpty();

        return isEmpty ? "Item-button isEmpty" : "Item-button";
    }
}

export default ItemComponent;
