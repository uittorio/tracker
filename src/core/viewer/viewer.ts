import { State } from "../state/state";

export interface Viewer<T> {
    getViewFromState(state: State, name: string): T
}