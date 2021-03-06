import { BUY_DONUT } from "./donutType"

const initialState = {
    numberOfDonuts: 30
}

const donutReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_DONUT:
            return {
                ...state,
                numberOfDonuts: state.numberOfDonuts - action.payload
            }

            default:
                return state
    }
}

export default donutReducer