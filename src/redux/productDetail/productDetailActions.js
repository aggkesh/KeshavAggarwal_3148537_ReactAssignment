import axios from 'axios'
import { FETCH_PRODUCTDETAIL_REQUEST, FETCH_PRODUCTDETAIL_SUCCESS, FETCH_PRODUCTDETAIL_FAILURE } from "./productDetailTypes"

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

export const fetchProductDetail = (productid) => {
    return (dispatch) => {
        const url = 'http://localhost:3000/products/' + productid
        createRequest(url, dispatch)
    }
}

const createRequest= (url, dispatch) => {
    dispatch(fetchProductDetailRequest());    
    axios.get(url)
        .then(response => {
            const product = response.data
            dispatch(fetchProductDetailSuccess(product))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchProductDetailFailure(errorMessage))
        });
}