import { 
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_FAILURE 
} from "./orderTypes"

const initialState = {
    loading: false,
    orderPlaced: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PLACE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                orderPlaced: false,
                error: action.payload
            }    
        default: return state    
    }
}

export default reducer