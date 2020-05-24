import { 
    FETCH_ORDERDETAIL_REQUEST,
    FETCH_ORDERDETAIL_SUCCESS, 
    FETCH_ORDERDETAIL_FAILURE 
} from "./orderTypes"

const initialState = {
    default: true,
    loading: false,
    orderDetail: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERDETAIL_REQUEST:
            return {
                ...state,
                default: false,
                loading: true
            }
        case FETCH_ORDERDETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                orderDetail: action.payload,
                error: ''
            }
        case FETCH_ORDERDETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                orderDetail: [],
                error: action.payload
            }        
        default: return state    
    }
}

export default reducer