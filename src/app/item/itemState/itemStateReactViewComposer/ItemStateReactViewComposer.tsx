import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../../../reactViewer/reactViewerComposer/reactViewComposer";
import { ItemStateComponent } from "../itemState";
import { ImageRepository } from "../../../../core/imageRepository/imageRepository";

export class ItemStateReactViewComposer implements ReactViewComposer {
	private readonly _imageRepository: ImageRepository;
	
	constructor(imageRepository: ImageRepository) {
		this._imageRepository = imageRepository;
	}
	
    public compose(state: string, resource: string): ReactNode {
        return <ItemStateComponent resource={resource} state={state} imageRepository={this._imageRepository}/>
    }
}
