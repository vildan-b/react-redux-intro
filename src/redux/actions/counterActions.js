import * as actionTypes from "./actionTypes"

export const increasedCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreasedCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increasedByTwoCounter=()=>({
    type:actionTypes.INCREASE_BYE_TWO_COUNTER,
    payload:2
})

