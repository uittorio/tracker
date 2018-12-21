import { ItemCountComponent } from "../itemCount";
import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../../../reactViewer/reactViewerComposer/reactViewComposer";
import { ImageRepository } from "../../../../core/imageRepository/imageRepository";
export class ItemCountReactViewComposer implements ReactViewComposer {
	private readonly _imageRepository: ImageRepository;
	
    constructor(imageRepository: ImageRepository) {
        this._imageRepository = imageRepository;
    }
    public compose(count: string, resource: string): ReactNode {
        return <ItemCountComponent count={parseInt(count)} resource={resource} imageRepository={this._imageRepository}/>
    }
}
