
export interface ViewComposer<T> {
	compose(resource: string, state: string): T;
}