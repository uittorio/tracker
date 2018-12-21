import { Viewer } from "../../core/viewer/viewer";
import { State } from "../../core/state/state";
import { ReactViewComposer } from "./reactViewerComposer/reactViewComposer";
import { ReactNode } from "react";

export class ReactViewer implements Viewer<ReactNode> {
    private readonly _viewComposer: ReactViewComposer;

    constructor(viewComposer: ReactViewComposer) {
        this._viewComposer = viewComposer;
    }

    getViewFromState(state: State, resource: string): ReactNode {
        return this._viewComposer.compose(state.getValue(), resource);
    }
}