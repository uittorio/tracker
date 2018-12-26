import './index.scss';
import * as ReactDOM from "react-dom";
import * as React from "react";
import App from "./app/app";
import "./language/language.ts";
import { Provider } from "react-redux";
import store from "./app/store/store";
const numberOfPlayers: number = 2;

ReactDOM.render(
	<Provider
		store={store}>
		<App numberOfPlayers={numberOfPlayers}/>
	</Provider>,
	document.getElementById("app")
);