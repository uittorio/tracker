import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../reactViewer/reactViewerComposer/reactViewComposer";
import { ItemStateComponent } from "../../app/item/itemState/itemState";

export class ItemStateReactViewComposer implements ReactViewComposer {
    public compose(state: string, name: string): ReactNode {
        return <ItemStateComponent name={name} state={state}/>
    }
}
