import { combineReducers } from 'redux'
import productsReducer from './productList/productsReducer'
import productDetailReducer from './productDetail/productDetailReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

export default rootReducer