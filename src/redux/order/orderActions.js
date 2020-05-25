import axios from 'axios';
import { 
    FETCH_ORDERS_REQUEST, 
    FETCH_ORDERS_SUCCESS, 
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERDETAIL_REQUEST,
    FETCH_ORDERDETAIL_SUCCESS, 
    FETCH_ORDERDETAIL_FAILURE, 
    PLACE_ORDER_REQUEST,
    FETCH_ORDERS_URL,
    PLACE_ORDER_FAILURE, 
    USERNAME_QUERY
} from './orderTypes';
import { clearCart } from '../cart/cartActions';

export const fetchOrdersRequest = () => {
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailure = error => {
    return {
        type: FETCH_ORDERS_FAILURE,
        payload: error
    }
}

export const fetchOrderDetailRequest = () => {
    return {
        type: FETCH_ORDERDETAIL_REQUEST
    }
}

export const fetchOrderDetailSuccess = (order) => {
    return {
        type: FETCH_ORDERDETAIL_SUCCESS,
        payload: order
    }
}

export const fetchOrderDetailFailure = error => {
    return {
        type: FETCH_ORDERDETAIL_FAILURE,
        payload: error
    }
}

export const placeOrderRequest = () => {
    return {
        type: PLACE_ORDER_REQUEST
    }
}

export const placeOrderFailure = error => {
    return {
        type: PLACE_ORDER_FAILURE,
        payload: error
    }
}

export const placeOrder = (cart, username, history) => {
    return (dispatch) => {
        const url = FETCH_ORDERS_URL + '/'
 
        dispatch(placeOrderRequest());    

        axios.post(url, makeOrder(cart, username))
            .then(response => {
                const order = response.data
                alert("Order Placed with ORDER-ID " + order.id)
                dispatch(clearCart())
                history.push('/orders')
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(placeOrderFailure(errorMessage))
                history.push('/error/500')
            });
    }
}

export const fetchOrderDetail = (orderId, history) => {
    return (dispatch) => {
        const url = FETCH_ORDERS_URL + '/' + orderId
        
        dispatch(fetchOrderDetailRequest());    
        axios.get(url)
            .then(response => {
                const orderDetail = response.data
                dispatch(fetchOrderDetailSuccess(orderDetail))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchOrderDetailFailure(errorMessage))
                history.push('/error/500')
            });
    }
}

export const fetchOrders = (username, history) => {
    return (dispatch) => {
        const url = FETCH_ORDERS_URL + '/' + USERNAME_QUERY + username
        
        dispatch(fetchOrdersRequest());    
        axios.get(url)
            .then(response => {
                const orders = response.data
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchOrdersFailure(errorMessage))
                history.push('/error/500')
            });
    }
}

const makeOrder = (cart, username) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    return {
        username: username,
        orderDateAndTime: dateTime,
        orderSubTotal: cart.cartSubTotal,
        orderTax: cart.cartTax,
        orderTotal: cart.cartTotal,
        products: cart.products
    }
}