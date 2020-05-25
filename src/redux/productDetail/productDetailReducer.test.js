import reducer from './productDetailReducer';
import {
    fetchProductDetailRequest,
    fetchProductDetailSuccess,
    fetchProductDetailFailure
} from './productDetailActions';

describe('Product Detail Reducer', () => {

    it('Invalid Action Product Detail Reducer', () => {
        const expectedState = {
            default: true,
            loading: false,
            productDetail: {},
            error: ''
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Fetch Product Detail Action In Product Detail Reducer', () => {
        const expectedState = {
            default: false,
            loading: true,
            productDetail: {},
            error: ''
        }

        expect(reducer(undefined, fetchProductDetailRequest())).toEqual(expectedState)
    })

    it('Fetch Product Detail Success Action In Product Detail Reducer', () => {
        const product = {
            id: 1,
            title: "Product1",
            price: 2000
        }

        const expectedState = {
            default: true,
            loading: false,
            productDetail: product,
            error: ''
        }

        expect(reducer(undefined, fetchProductDetailSuccess(product))).toEqual(expectedState)
    })

    it('Fetch Product Detail Failure Action In Product Detail Reducer', () => {
        const error = {
            error: 'error'
        }

        const expectedState = {
            default: true,
            loading: false,
            productDetail: {},
            error: error
        }

        expect(reducer(undefined, fetchProductDetailFailure(error))).toEqual(expectedState)
    })
})
