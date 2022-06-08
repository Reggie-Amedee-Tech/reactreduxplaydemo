import { BUY_DONUT } from "./donutType"

export const buyDonut = (number = 1) => {
    return {
        type: BUY_DONUT,
        payload: number
    }
}