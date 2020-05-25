import reducer from './orderReducer';
import {
    fetchOrdersRequest,
    fetchOrdersSuccess,
    fetchOrdersFailure
} from './orderActions';

describe('Orders Reducet', () => {


    it('Invalid Action In Orders Reducer', () => {
        const expectedState = {
            default: true,
            loading: false,
            orders: [],
            error: ''
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Fetch Orders Request Action In Orders Reducer', () => {
        const expectedState = {
            default: false,
            loading: true,
            orders: [],
            error: ''
        }

        expect(reducer(undefined, fetchOrdersRequest())).toEqual(expectedState)
    })

    it('Fetch Orders Success Action In Orders Reducer', () => {
        const orders = [
            {
                id: 1,
                orderSubTotal: 2000,
                orderTax: 500,
                orderTotal: 2500
            },
            {
                id: 2,
                orderSubTotal: 2500,
                orderTax: 1000,
                orderTotal: 3500
            }
        ]

        const expectedState = {
            default: true,
            loading: false,
            orders: orders,
            error: ''
        }

        expect(reducer(undefined, fetchOrdersSuccess(orders))).toEqual(expectedState)
    })

    it('Fetch Orders Failure Action In Orders Reducer', () => {
        const error = {
            error: "error"
        }

        const expectedState = {
            default: true,
            loading: false,
            orders: [],
            error: error
        }

        expect(reducer(undefined, fetchOrdersFailure(error))).toEqual(expectedState)
    })
})