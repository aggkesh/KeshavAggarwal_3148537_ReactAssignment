import { 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,
    DEFAULT_SORT
} from "./productsTypes"

const initialState = {
    default: true,
    loading: false,
    search: '',
    activePage: 1,
    sort: DEFAULT_SORT,
    productTotalCount: 0,
    products: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                default: false,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                productTotalCount: action.productTotalCount,
                search: action.search,
                activePage: action.activePage,
                sort: action.sort,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }        
        default: return state    
    }
}

export default reducer