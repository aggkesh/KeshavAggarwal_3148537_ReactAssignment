import { FETCH_PRODUCTDETAIL_REQUEST, FETCH_PRODUCTDETAIL_SUCCESS, FETCH_PRODUCTDETAIL_FAILURE } from "./productDetailTypes"

const initialState = {
    default: true,
    loading: false,
    productDetail: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTDETAIL_REQUEST:
            return {
                ...state,
                default: false,
                loading: true
            }
        case FETCH_PRODUCTDETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetail: action.payload,
                error: ''
            }
        case FETCH_PRODUCTDETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                productDetail: [],
                error: action.payload
            }        
        default: return state    
    }
}

export default reducer