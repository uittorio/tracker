import { ItemCountComponent } from "../itemCount";
import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../../../reactViewer/reactViewerComposer/reactViewComposer";
import { ImageRepository } from "../../../../core/imageRepository/imageRepository";
import { Inject, Injectable } from "react.di";
@Injectable
export class ItemCountReactViewComposer implements ReactViewComposer {
	@Inject private readonly _imageRepository: ImageRepository;
	
    constructor(imageRepository: ImageRepository) {
        this._imageRepository = imageRepository;
    }
    
    public compose(resource: string, state: string): ReactNode {
        return <ItemCountComponent
            count={parseInt(state)}
            resource={resource}
            imageRepository={this._imageRepository}/>
    }
}
