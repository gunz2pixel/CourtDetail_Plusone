import { mountComponent, expect, shallowComponent, mount } from "../../helper";
import React from "react";
import SportList from "../../../src/app/components/sports/SportList";
import SportListItem from "../../../src/app/components/sports/SportListItem";

// Use "describe" to group together similar tests
describe("<SportList />", () => {

    it("render without error", () => {
        const component = mountComponent(SportList);

        expect(component.html()).not.to.be.empty;
        expect(component.html()).contains("Sport");
    });

    it("render SportListItem 2 items correctly", () => {

        const props = {
            sportList: [
                { sportId: 1, sportName: "Football" },
                { sportId: 2, sportName: "Basketball"}
            ]
        }

        const component = mountComponent(SportList, props);

        expect(component.find(SportListItem)).lengthOf(2);
    });
})