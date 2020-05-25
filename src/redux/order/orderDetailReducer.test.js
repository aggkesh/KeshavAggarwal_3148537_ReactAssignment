import reducer from './orderDetailReducer';
import {
    fetchOrderDetailRequest,
    fetchOrderDetailSuccess,
    fetchOrderDetailFailure
} from './orderActions';

describe('Order Detail Reducer', () => {

    it('Invalid Action In Order Detail Reducer', () => {
        const expectedState = {
            default: true,
            loading: false,
            orderDetail: {},
            error: ''
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Fetch Order Request Action In Order Detail Reducer', () => {
        const expectedState = {
            default: false,
            loading: true,
            orderDetail: {},
            error: ''
        }

        expect(reducer(undefined, fetchOrderDetailRequest())).toEqual(expectedState)
    })

    it('Fetch Order Success Action In Order Detail Reducer', () => {
        const order = {
            id: 1,
            orderSubTotal: 2000,
            orderTax: 500,
            orderTotal: 2500
        }

        const expectedState = {
            default: true,
            loading: false,
            orderDetail: order,
            error: ''
        }

        expect(reducer(undefined, fetchOrderDetailSuccess(order))).toEqual(expectedState)
    })

    it('Fetch Order Failure Action In Order Detail Reducer', () => {
        const error = {
            error: "error"
        }

        const expectedState = {
            default: true,
            loading: false,
            orderDetail: [],
            error: error
        }

        expect(reducer(undefined, fetchOrderDetailFailure(error))).toEqual(expectedState)
    })
})