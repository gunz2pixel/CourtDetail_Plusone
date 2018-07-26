import { mountComponent, expect, shallowComponent, mount } from "../helper";
import App from "../../src/components/App";
import React from "react";
import SportList from "../../src/components/sports/SportList";
import EventList from "../../src/components/events/EventList";

// Use "describe" to group together similar tests
describe("<App />", () => {

    it("render without error", () => {
        const component = mountComponent(App);

        expect(component.html()).not.to.be.empty;
    });

    it("render sport type", () => {
        const component = mountComponent(App);        
        expect(component.find(SportList)).to.have.length(1);
    })

    it("render events", () => {
        const component = mountComponent(App);
        expect(component.find(EventList)).to.have.length(1);
    })
})

