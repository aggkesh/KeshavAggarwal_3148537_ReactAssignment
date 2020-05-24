import axios from 'axios'
import { 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,  
    LOW_TO_HIGH_SORT, 
    HIGH_TO_LOW_SORT, 
    HEADER_TOTAL_COUNT, 
    URL_PRODUCTS_FETCH,
    PAGE_QUERY,
    DEFAULT_LIMIT_QUERY,
    SORT_PRICE_QUERY,
    ORDER_QUERY,
    ASC_QUERY,
    DESC_QUERY,
    TITLE_LIKE_QUERY
} from "./productsTypes"

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products, productTotalCount, search, activePage, sort) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        productTotalCount: productTotalCount,
        search: search,
        activePage: activePage,
        sort: sort,
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = (search, activePage, sort, history) => {
    return (dispatch) => {
        createRequest(requestUrl(search, activePage, sort), search, activePage, sort, history, dispatch)
    }
}

const requestUrl = (search, activePage, sort) => {

    var url = baseURL(search) + PAGE_QUERY + activePage + '&' + DEFAULT_LIMIT_QUERY

    switch(sort) { 
        case LOW_TO_HIGH_SORT:
            url =  url + '&' + SORT_PRICE_QUERY + '&' + ORDER_QUERY + ASC_QUERY;
            break;
        case HIGH_TO_LOW_SORT:
            url =  url + '&' + SORT_PRICE_QUERY + '&' + ORDER_QUERY + DESC_QUERY;
            break;
        default:    
    }
    return url
}

const baseURL = (search) => {
    return search && search === '' ? URL_PRODUCTS_FETCH + '?' 
        : URL_PRODUCTS_FETCH + '?' + TITLE_LIKE_QUERY + search + '&';
}

const createRequest= (url, search, activePage, sort, history, dispatch) => {
    dispatch(fetchProductsRequest());    
    axios.get(url)
        .then(response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products, 
                response.headers[HEADER_TOTAL_COUNT], search, activePage, sort))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchProductsFailure(errorMessage))
            history.push('/error/500')
        });
}