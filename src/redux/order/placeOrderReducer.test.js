import reducer from './placeOrderReducer';
import {
    placeOrderRequest,
    placeOrderFailure
} from './orderActions';

describe('Place Order Reducer', () => {

    it('Invalid Action Reducer', () => {
        const expectedState = {
            loading: false,
            orderPlaced: false,
            error: ''
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Place Order Request Action Reducer', () => {
        const expectedState = {
            loading: true,
            orderPlaced: false,
            error: ''
        }

        expect(reducer(undefined, placeOrderRequest())).toEqual(expectedState)
    })

    it('Place Order Failure Action Reducer', () => {
        const error = {
            error: "error"
        }

        const expectedState = {
            loading: false,
            orderPlaced: false,
            error: error
        }

        expect(reducer(undefined, placeOrderFailure(error))).toEqual(expectedState)
    })
})