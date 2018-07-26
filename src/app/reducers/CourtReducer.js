import {
    COURT_SEARCH
} from "../actions/Court";
import { filter } from "lodash";

const sample = [
            { courtId: 1, courtName: "สนาม 1" },
            { courtId: 2, courtName: "สนาม 2" },
            { courtId: 3, courtName: "สนาม 3" },
            { courtId: 4, courtName: "สนาม 4" }
        ];


export function courtSearchReducer(state = [], action) {

    switch (action.type) {
        case COURT_SEARCH: {
            if(!action.payload) return [].concat(sample);

            return filter(sample, court => court.courtName.indexOf(action.payload) > -1);
        }
        default: return [].concat(sample);
    }
}