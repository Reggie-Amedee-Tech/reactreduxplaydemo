import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donuts/donutReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    donut: donutReducer,
    user: userReducer
})

export default rootReducer