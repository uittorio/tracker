import { ReactNode } from "react";

export interface ReactViewComposer {
    compose(value: string, name: string): ReactNode;
}