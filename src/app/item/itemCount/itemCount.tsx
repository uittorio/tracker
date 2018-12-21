import * as React from "react";
import "./ItemCount.scss";
import { ImageRepository } from "../../../core/imageRepository/imageRepository";

interface ItemCountProps {
    count: number;
    resource: string;
	imageRepository: ImageRepository;
}

interface ItemCountState {
    style: React.CSSProperties;
}

export class ItemCountComponent extends React.Component<ItemCountProps, ItemCountState> {
    constructor(props) {
        super(props);

        const image: string = this.props.imageRepository.get(this.props.resource);
        this.state = {
            style: {
                backgroundImage: "url("+ image +")"
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
