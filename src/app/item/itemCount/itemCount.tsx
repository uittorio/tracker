import * as React from "react";
import "./ItemCount.scss";

interface ItemCountProps {
    count: number;
    name: string;
}

interface ItemCountState {
    style: React.CSSProperties;
}

export class ItemCountComponent extends React.Component<ItemCountProps, ItemCountState> {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                backgroundImage: "url(resources/"+ this.props.name +"/" + this.props.name +".png)"
            }
        };
    }

    public render() {
        return (
            <div className={"ItemCount-content"}
                 style={this.state.style}>
                <span className={"ItemCount-count"}>
                    {this.props.count}
                </span>
            </div>
        )
    }
}
