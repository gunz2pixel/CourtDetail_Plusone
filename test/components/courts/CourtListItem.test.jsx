import { expect, mountComponent } from "../../helper";
import React from "react";
import CourtListItem from "../../../src/app/components/courts/CourtListItem";

// Use "describe" to group together similar tests
describe("<CourtListItem />", () => {

    it("render without error", () => {
        const component = mountComponent(CourtListItem);

        expect(component.html()).not.to.be.empty;        
    });

    it("render the given props correctly", () => {
        const props = {
            courtId: 1,
            courtName: "Bangna"
        };

        const component = mountComponent(CourtListItem, props);                
        expect(component.html()).to.be.contain(props.courtName);

    })
})