export interface Item<T> {
	items: Array<Item<T>>;
	id: string;
	resource: string;
    prevState(): void;
    nextState(): void;
    getCurrentStateView(): T;
    isEmpty(): boolean;
    addItem(item: Item<T>): void;
    isState(updateOn: string): boolean;
    copyState(itemToCopy: Item<T>): void;
    getCurrentState(): number;
}

