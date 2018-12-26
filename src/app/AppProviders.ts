import { ImageRepository } from "../core/imageRepository/imageRepository";
import { ItemStateReactViewComposer } from "./item/itemState/itemStateReactViewComposer/ItemStateReactViewComposer";
import { ItemStateFactory } from "../core/item/itemState/itemStateFactory";
import { ItemListFactory } from "../core/item/itemListFactory";
import { GameMultiPlayerItemRepository } from "../core/game/gameMultiplayer/gameMultiplayerRepository";
import { GameMultiPlayerUpdater } from "../core/game/gameMultiplayer/gameMultiPlayerUpdater";
import { ItemStateSwitchFactory } from "../core/item/itemStateSwitch/itemStateSwitchFactory";
import { GameItemRepository } from "../core/game/gameItemRepository";
import { ItemCountReactViewComposer } from "./item/itemCount/itemCountReactViewComposer/ItemCountReactViewComposer";
import { ItemCountFactory } from "../core/item/itemCount/itemCountFactory";
import { Binding } from "react.di/lib/bindings/Binding";

export const AppProviders: Array<Binding> = [
	ImageRepository,
	ItemCountReactViewComposer,
	ItemStateReactViewComposer,
	{
		provide: ItemCountFactory,
		useFactory: (context) => {
			const countReactViewComposer = context.container.get(ItemCountReactViewComposer);
			return new ItemCountFactory(countReactViewComposer);
		}
	},
	{
		provide: ItemStateFactory,
		useFactory: (context) => {
			const stateReactViewComposer = context.container.get(ItemStateReactViewComposer);
			return new ItemStateFactory(stateReactViewComposer);
		}
	},
	{
		provide: ItemStateSwitchFactory,
		useFactory: (context) => {
			const stateReactViewComposer = context.container.get(ItemStateReactViewComposer);
			return new ItemStateSwitchFactory(stateReactViewComposer);
		}
	},
	GameItemRepository,
	GameMultiPlayerItemRepository,
	GameMultiPlayerUpdater,
	ItemListFactory
]