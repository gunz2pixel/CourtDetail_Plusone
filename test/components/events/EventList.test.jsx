import { mountComponent, expect, shallowComponent, mount } from "../../helper";
import React from "react";
import EventList from "../../../src/app/components/events/EventList";
import EventListItem from "../../../src/app/components/events/EventListItem";

// Use "describe" to group together similar tests
describe("<EventList />", () => {

    it("render without error", () => {
        const component = mountComponent(EventList);

        expect(component.html()).not.to.be.empty;
        expect(component.html()).contains("Events");
    });

    it("render EventListItem 2 items correctly", () => {

        const props = {
            eventList: [
                { eventId: 1, eventName: "Tournament" },
                { eventId: 2, eventName: "Match"}
            ]
        }

        const component = mountComponent(EventList, props);

        expect(component.find(EventListItem)).lengthOf(2);
    });
})