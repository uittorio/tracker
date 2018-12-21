import * as React from "react";
import "./item.scss";
import { ReactNode } from "react";
import { Item } from "../../core/item/item";


export interface ItemProps {
    item: Item<ReactNode>;
    onChange: (item: Item<ReactNode>) => void;
}

export class ItemComponent extends React.Component<ItemProps> {
    public render() {
        const childItems: Array<JSX.Element>= this.props.item.items.map((item: Item<ReactNode>, index: number) => {
           return <div className={"Item-child"} key={index}>
               <ItemComponent item={item} onChange={(item: Item<ReactNode>) => this.onChangeChild(item)}/>
           </div>
        });
        return (
            <div className={"Item-content"}>
                <button className={this._getButtonClass()}
                        onClick={() => this.onLeftClick()}
                        onContextMenu={() => this.onRightClick()}>
                    {this.props.item.getCurrentStateView()}
                </button>
                <div className={"Item-children"}>
                    {childItems}
                </div>
            </div>
        )
    }

    onChangeChild(item: Item<ReactNode>) {
        this.props.onChange(item);
    }

    onChange() {
        this.props.onChange(this.props.item);
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
        }, () => {
            this.onChange();
        });
    }

    _getButtonClass() {
        const isEmpty: boolean = this.props.item.isEmpty();

        return isEmpty ? "Item-button isEmpty" : "Item-button";
    }
}

export default ItemComponent;
