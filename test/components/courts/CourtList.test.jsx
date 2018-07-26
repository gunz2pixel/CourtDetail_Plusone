import React from "react";
import { mountComponent, expect } from "../../helper";
import CourtList from "../../../src/app/components/courts/CourtList";
import CourtListItem from "../../../src/app/components/courts/CourtListItem";

describe("<CourtList />", () => {

    it("render without error", () => {

        const component = mountComponent(CourtList);

        expect(component.html()).not.be.empty;
    })

    it("render given CourtListItem correctly", () => {
        const props = {
            courtList: [
                { courtId: 1, courtName: "Sena" },
                { courtId: 2, courtName: "Bangbon" },
                { courtId: 3, courtName: "Ramaintra" },
                { courtId: 4, courtName: "Highway" }
            ]
        }

        const component = mountComponent(CourtList, props);
        
        expect(component.find(CourtListItem)).lengthOf(4);
    })
})