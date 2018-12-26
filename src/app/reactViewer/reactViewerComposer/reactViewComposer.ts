import { ReactNode } from "react";
import { ViewComposer } from "../../../core/viewer/viewComposer";

export interface ReactViewComposer extends ViewComposer<ReactNode> {
    compose(resource: string, state: string): ReactNode;
}