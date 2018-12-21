import * as React from "react";
import "./ItemState.scss";
import { ImageRepository } from "../../../core/imageRepository/imageRepository";

interface ItemStateProps {
    resource: string;
    state: string;
    imageRepository: ImageRepository;
}

export class ItemStateComponent extends React.Component<ItemStateProps> {
    constructor(props) {
        super(props);
    }

    public render() {
		const image: string = this.props.imageRepository.getNested(this.props.resource, this.props.state);
		
        const style = {
            backgroundImage: "url("+ image +")"
        };

        return (
            <div className={"ItemState-content"}
                 style={style}>
            </div>
        )
    }
}
