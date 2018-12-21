import { ItemCountComponent } from "../itemCount";
import * as React from "react";
import { ReactNode } from "react";
import { ReactViewComposer } from "../../../reactViewer/reactViewerComposer/reactViewComposer";
export class ItemCountReactViewComposer implements ReactViewComposer {
    public compose(count: string, resource: string): ReactNode {
        return <ItemCountComponent count={parseInt(count)} resource={resource}/>
    }
}
