import { expect, mountComponent } from "../../helper";
import React from "react";
import SportListItem from "../../../src/app/components/sports/SportListItem";

// Use "describe" to group together similar tests
describe("<SportListItem />", () => {

    it("render without error", () => {
        const component = mountComponent(SportListItem);

        expect(component.html()).not.to.be.empty;        
    });

    it("render the given props correctly", () => {
        const props = {
            sportId: 1,
            sportName: "Test"
        };

        const component = mountComponent(SportListItem, props);                
        expect(component.html()).to.be.contain(props.sportName);

    })
})