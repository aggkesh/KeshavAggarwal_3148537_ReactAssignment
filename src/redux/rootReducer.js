import { combineReducers } from 'redux'
import productsReducer from './productList/productsReducer'
import productDetailReducer from './productDetail/productDetailReducer'
import cartReducer from './cart/cartReducer'
import authenticationReducer from './authentication/authenticationReducer'
import orderReducer from './order/orderReducer'
import orderDetailReducer from './order/orderDetailReducer'
import placeOrderReducer from './order/placeOrderReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    auth: authenticationReducer,
    orders: orderReducer,
    orderDetail: orderDetailReducer,
    placeOrder: placeOrderReducer
})

export default rootReducer