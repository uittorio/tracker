export interface Item<T> {
    prevState(): void;
    nextState(): void;
    getCurrentStateView(): T;
    isEmpty(): boolean;
    addItem(item: Item<T>): void;
    items: Array<Item<T>>;
    name: string;
    resource: string;
    isState(updateOn: string): boolean;
    copyState(itemToCopy: Item<T>): void;
    getCurrentState(): number;
}

