import { Item } from "../item";
import { ItemStateConfig } from "./itemStateConfig";
import { ViewComposer } from "../../viewer/viewComposer";

export class ItemState<T> implements Item<T> {
	public items: Array<Item<T>> = [];
	public id: string;
	public resource: string;
	protected _states: Array<string>;
	protected _currentStateNumber: number;
	private _viewer: ViewComposer<T>;
	
	constructor(viewer: ViewComposer<T>, config: ItemStateConfig) {
		this.id = config.id;
		this.resource = config.resource;
		this._viewer = viewer;
		this._states = [config.states[0], ...config.states];
		this._currentStateNumber = 0;
	}
	
	nextState() {
		if (this._currentStateNumber >= this._states.length - 1) {
			this._currentStateNumber = 0;
		} else {
			this._currentStateNumber++;
		}
	}
	
	prevState() {
		if (this._currentStateNumber <= 0) {
			this._currentStateNumber = this._states.length - 1
		} else {
			this._currentStateNumber--;
		}
	}
	
	isEmpty(): boolean {
		return !this._currentStateNumber;
	}
	
	getCurrentStateView(): T {
		return this._viewer.compose(this.resource, this._states[this._currentStateNumber]);
	}
	
	addItem(item: Item<T>) {
		this.items.push(item);
	}
	
	isState(updateOn: string): boolean {
		if (updateOn === "EMPTY") {
			return this.isEmpty();
		}
		
		return false;
	}
	
	getCurrentState(): number {
		return this._currentStateNumber;
	}
	
	copyState(itemToCopy: Item<T>): void {
		this._currentStateNumber = itemToCopy.getCurrentState();
	}
	
}