import { shallowComponent, expect, mountComponent } from "../../helper";
import React from "react";
import CourtSearch from "../../../src/app/components/courts/CourtSearch";

describe("<CourtSearch />", () => {

    it("render without error", () => {
        const props = {
            match: {
                params: {
                    sportId: 1
                }
            }
        }

        const component = mountComponent(CourtSearch, props);
    })

})