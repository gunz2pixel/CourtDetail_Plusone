import { combineReducers } from "redux";
import { courtSearchReducer } from "./CourtReducer";

const rootReducer = combineReducers({
    courtList: courtSearchReducer
})

export default rootReducer;