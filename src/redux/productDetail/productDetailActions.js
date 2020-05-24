import axios from 'axios';
import { 
    FETCH_PRODUCTDETAIL_REQUEST, 
    FETCH_PRODUCTDETAIL_SUCCESS, 
    FETCH_PRODUCTDETAIL_FAILURE, 
    FETCH_PRODUCTDETAIL_URL 
} from './productDetailTypes';

export const fetchProductDetailRequest = () => {
    return {
        type: FETCH_PRODUCTDETAIL_REQUEST
    }
}

export const fetchProductDetailSuccess = (product) => {
    return {
        type: FETCH_PRODUCTDETAIL_SUCCESS,
        payload: product
    }
}

export const fetchProductDetailFailure = error => {
    return {
        type: FETCH_PRODUCTDETAIL_FAILURE,
        payload: error
    }
}

export const fetchProductDetail = (productId, history) => {
    return (dispatch) => {
        const url = FETCH_PRODUCTDETAIL_URL + '/' + productId
        createRequest(url, history, dispatch)
    }
}

const createRequest= (url, history, dispatch) => {
    dispatch(fetchProductDetailRequest());    
    axios.get(url)
        .then(response => {
            const product = response.data
            dispatch(fetchProductDetailSuccess(product))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchProductDetailFailure(errorMessage))
            history.push('/error/500')
        });
}