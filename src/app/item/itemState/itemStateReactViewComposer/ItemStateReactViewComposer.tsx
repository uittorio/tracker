import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../../../reactViewer/reactViewerComposer/reactViewComposer";
import { ItemStateComponent } from "../itemState";

export class ItemStateReactViewComposer implements ReactViewComposer {
    public compose(state: string, resource: string): ReactNode {
        return <ItemStateComponent resource={resource} state={state}/>
    }
}
