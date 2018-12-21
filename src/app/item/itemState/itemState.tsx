import * as React from "react";
import "./ItemState.scss";

interface ItemStateProps {
    resource: string;
    state: string;
}

export class ItemStateComponent extends React.Component<ItemStateProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        const style = {
            backgroundImage: "url(resources/" + this.props.resource + "/" + this.props.state + ".png)"
        };

        return (
            <div className={"ItemState-content"}
                 style={style}>
            </div>
        )
    }
}
