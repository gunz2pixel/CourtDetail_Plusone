require("jsdom-global/register");

import React from "react";
import ReactDOM from "react-dom";
import chai, { expect } from "chai";
import sinon from "sinon";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import mainReducers from "../src/reducers/index";
import { MemoryRouter } from "react-router-dom";
import jQuery from "jquery";

let jqueryHelper = require("./jquery-helper");

global.$ = require("jquery")(window);

// mock jquery fn
jqueryHelper($);

const reducers = mainReducers;

configure({ adapter: new Adapter() })

function mountComponent(ComponentClass, props, state) {
    const componentInstance = mount(
        <Provider store={createStore(reducers, state)}>
            <MemoryRouter>
                <ComponentClass {...props} />
            </MemoryRouter>
        </Provider>

    );

    return componentInstance;
}

function shallowComponent(ComponentClass, props) {
    const componentInstance = shallow(
        <ComponentClass {...props} />
    )
    
    return componentInstance;
}

function carousel() {
    return this;
}

export {
    mountComponent,
    shallowComponent,
    expect,
    sinon,
    mount,
    shallow
};