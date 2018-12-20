import './main.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
import { ItemCountFactory } from "./core/item/itemCount/itemCountFactory";
import { ReactViewer } from "./browser/reactViewer/reactViewer";
import { ItemCountReactViewComposer } from "./browser/itemCountReactViewComposer/ItemCountReactViewComposer";
import { ItemStateReactViewComposer } from "./browser/itemStateReactViewComposer/ItemCountReactViewComposer";
import { ItemStateFactory } from "./core/item/itemState/itemStateFactory";
import { ItemService } from "./app/item/itemService";
import { GameItemRepository } from "./core/game/gameItemRepository";

const reactCountViewComposer = new ItemCountReactViewComposer();
const reactCountViewer = new ReactViewer(reactCountViewComposer);
const itemCountFactory = new ItemCountFactory(reactCountViewer);

const reactStateViewComposer = new ItemStateReactViewComposer();
const reactStateViewer = new ReactViewer(reactStateViewComposer);
const itemStateFactory = new ItemStateFactory(reactStateViewer);

const itemService = new ItemService(itemCountFactory, itemStateFactory, new GameItemRepository());

ReactDOM.render(React.createElement(App, {
    itemService: itemService
}), document.getElementById("app"));