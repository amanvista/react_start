import { ActionTypes } from "../constants/action_types"

const initialState = {
    products:[{
        id: 1,
        title: "Aman",
        category: "Programmer",

    }]
}
export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;

    }
}