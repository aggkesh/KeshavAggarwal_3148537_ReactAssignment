import { FETCH_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, CLEAR_CART, CHANGE_PRODUCT_QUANTITY_IN_CART } from "./cartTypes"

export const fetchCart = () => {
    return {
        type: FETCH_CART
    }
}

export const addProductCart = product => {
    return {
        type: ADD_PRODUCT_CART,
        payload: product
    }
}

export const removeProductCart = product => {
    return {
        type: REMOVE_PRODUCT_CART,
        payload: product
    }
}

export const changeProductQuantityInCart = (product, productQuantity) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY_IN_CART,
        payload: product,
        productQuantity: productQuantity
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}