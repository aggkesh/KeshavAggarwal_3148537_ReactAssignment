import {
    fetchOrdersRequest,
    fetchOrdersSuccess,
    fetchOrdersFailure,
    fetchOrderDetailRequest,
    fetchOrderDetailSuccess,
    fetchOrderDetailFailure,
    placeOrderRequest,
    placeOrderFailure
} from './orderActions'
import { 
    FETCH_ORDERS_REQUEST, 
    FETCH_ORDERS_SUCCESS, 
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERDETAIL_REQUEST,
    FETCH_ORDERDETAIL_SUCCESS, 
    FETCH_ORDERDETAIL_FAILURE, 
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_FAILURE, 
} from './orderTypes';

describe('Orders Actions', () => {

    it('Fetch Orders Request', () => {
        const expectedActions = {
            type: FETCH_ORDERS_REQUEST
        }

        expect(fetchOrdersRequest()).toEqual(expectedActions)
    })

    it('Fetch Orders Success', () => {
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
        const expectedActions = {
            type: FETCH_ORDERS_SUCCESS,
            payload: orders
        }

        expect(fetchOrdersSuccess(orders)).toEqual(expectedActions)
    })

    it('Fetch Orders Failure', () => {
        const expectedAction = {
            type: FETCH_ORDERS_FAILURE,
            payload: {
                error: "error"
            }
        }

        expect(fetchOrdersFailure({
            error: "error"
        })).toEqual(expectedAction)
    })

    it('Fetch Order Detail Request', () => {
        const expectedActions = {
            type: FETCH_ORDERDETAIL_REQUEST
        }

        expect(fetchOrderDetailRequest()).toEqual(expectedActions)
    })

    it('Fetch Order Detail Success', () => {
        const order = {
                id: 1,
                orderSubTotal: 2000,
                orderTax: 500,
                orderTotal: 2500
            }

        const expectedActions = {
            type: FETCH_ORDERDETAIL_SUCCESS,
            payload: order
        }

        expect(fetchOrderDetailSuccess(order)).toEqual(expectedActions)
    })

    it('Fetch Order Detail Failure', () => {
        const error = {
            error: "error"
        }

        const expectedActions = {
            type: FETCH_ORDERDETAIL_FAILURE,
            payload: error
        }

        expect(fetchOrderDetailFailure(error)).toEqual(expectedActions)
    })

    it('Place Order Request', () => {
        const expectedActions = {
            type: PLACE_ORDER_REQUEST
        }

        expect(placeOrderRequest()).toEqual(expectedActions)
    })

    it('Place Order Failure', () => {
        const error = {
            error: "error"
        }

        const expectedActions = {
            type: PLACE_ORDER_FAILURE,
            payload: error
        }

        expect(placeOrderFailure(error)).toEqual(expectedActions)
    })
})