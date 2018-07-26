import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "./reducers/index";
import routes from "./routes";

import asyncMd from "./middlewares/async"

import { debug } from "util";

const createStoreWithMiddleware = applyMiddleware(asyncMd)(createStore)

const provider =
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>

ReactDOM.render(
    provider,
    document.getElementById("body")
);

