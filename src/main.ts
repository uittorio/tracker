import './main.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";

const numberOfPlayers: number = 2;

ReactDOM.render(React.createElement(App, {
    numberOfPlayers: numberOfPlayers
}), document.getElementById("app"));