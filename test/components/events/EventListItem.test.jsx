import { expect, mountComponent } from "../../helper";
import React from "react";
import EventListItem from "../../../src/app/components/events/EventListItem";

// Use "describe" to group together similar tests
describe("<EventListItem />", () => {

    it("render without error", () => {
        const component = mountComponent(EventListItem);

        expect(component.html()).not.to.be.empty;        
    });

    it("render the given props correctly", () => {
        const props = {
            eventId: 1,
            eventName: "Test"
        };

        const component = mountComponent(EventListItem, props);                
        expect(component.html()).to.be.contain(props.eventName);

    })
})