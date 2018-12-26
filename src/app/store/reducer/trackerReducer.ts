import { ACTION_ITEMS } from "../action/action-types";
import { TrackerState } from "../state/trackerState";
import { TrackerReducerAction } from "./trackerReducerAction";

const trackerReducer = <T>(groupListOfItems: TrackerState<T> = {
	groupListOfItems: []
}, action: TrackerReducerAction<T>): TrackerState<T>  => {
	switch (action.type) {
		case ACTION_ITEMS.UPDATE:
			return {
				groupListOfItems: []
			};
		default:
			return groupListOfItems;
	}
};
export default trackerReducer;