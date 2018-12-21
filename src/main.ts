import './main.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
import { ItemCountFactory } from "./core/item/itemCount/itemCountFactory";
import { ReactViewer } from "./app/reactViewer/reactViewer";
import { ItemCountReactViewComposer } from "./app/item/itemCount/itemCountReactViewComposer/ItemCountReactViewComposer";
import { ItemStateReactViewComposer } from "./app/item/itemState/itemStateReactViewComposer/ItemStateReactViewComposer";
import { ItemStateFactory } from "./core/item/itemState/itemStateFactory";
import { ItemService } from "./core/item/itemService";
import { GameItemRepository } from "./core/game/gameItemRepository";
import { ItemStateSwitchFactory } from "./core/item/itemStateSwitch/itemStateSwitchFactory";
import { GameMultiplayerService } from "./core/game/gameMultiplayer/gameMultiplayerService";
import { GameMultiplayerItemRepository } from "./core/game/gameMultiplayer/gameMultiplayerRepository";

const numberOfPlayers: number = 2;

const reactCountViewComposer = new ItemCountReactViewComposer();
const reactCountViewer = new ReactViewer(reactCountViewComposer);
const itemCountFactory = new ItemCountFactory(reactCountViewer);

const reactStateViewComposer = new ItemStateReactViewComposer();
const reactStateViewer = new ReactViewer(reactStateViewComposer);
const itemStateFactory = new ItemStateFactory(reactStateViewer);

const itemStateSwitchFactory = new ItemStateSwitchFactory(reactStateViewer);
const itemService = new ItemService(itemCountFactory, itemStateFactory, itemStateSwitchFactory, new GameItemRepository());
const gameMultiPlayerService = new GameMultiplayerService(new GameMultiplayerItemRepository().getAll());

ReactDOM.render(React.createElement(App, {
    numberOfPlayers: numberOfPlayers,
    itemService: itemService,
    gameMultiPlayerService: gameMultiPlayerService
}), document.getElementById("app"));