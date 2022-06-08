import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donuts/donutReducer";


const rootReducer = combineReducers({
    donutReducer,
    cakeReducer
})
const store = createStore(donutReducer)
export default store;