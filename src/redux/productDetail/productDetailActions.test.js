import {
    fetchProductDetailRequest,
    fetchProductDetailSuccess,
    fetchProductDetailFailure
} from './productDetailActions'
import { 
    FETCH_PRODUCTDETAIL_REQUEST, 
    FETCH_PRODUCTDETAIL_SUCCESS, 
    FETCH_PRODUCTDETAIL_FAILURE 
} from './productDetailTypes';

describe('Product Detail Actions', () => {

    it('Fetch Product Detail Request Action', () => {
        const expectedAction = {
            type: FETCH_PRODUCTDETAIL_REQUEST
        }

        expect(fetchProductDetailRequest()).toEqual(expectedAction)
    })

    it('Fetch Product Detail Success Action', () => {
        const product = {
            id: 1,
            title: "Product1",
            price: 2000
        }
        const expectedAction = {
            type: FETCH_PRODUCTDETAIL_SUCCESS,
            payload: product
        }

        expect(fetchProductDetailSuccess(product)).toEqual(expectedAction)
    })

    it('Fetch Product Detail Failure Action', () => {
        const error = {
            error: 'error'
        }

        const expectedAction = {
            type: FETCH_PRODUCTDETAIL_FAILURE,
            payload: error
        }

        expect(fetchProductDetailFailure(error)).toEqual(expectedAction)
    })
})