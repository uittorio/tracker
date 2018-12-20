import { ItemCountComponent } from "../../app/item/itemCount/itemCount";
import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../reactViewer/reactViewerComposer/reactViewComposer";
export class ItemCountReactViewComposer implements ReactViewComposer {
    public compose(count: string, name: string): ReactNode {
        return <ItemCountComponent count={parseInt(count)} name={name}/>
    }
}
