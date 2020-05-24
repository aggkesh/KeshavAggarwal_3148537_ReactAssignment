import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, CLEAR_CART, CHANGE_PRODUCT_QUANTITY_IN_CART } from "./cartTypes"

const initialState = {
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return addProductToCart(state, action.payload)
        case REMOVE_PRODUCT_CART:
            return removeProductFromCart(state, action.payload)  
        case CLEAR_CART:
            return {
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0,
                products: []
            }
        case CHANGE_PRODUCT_QUANTITY_IN_CART:
            return changeProductQuanityInCart(state, action.payload, action.productQuantity)
        default: return state    
    }
}

const addProductToCart = (state, newProduct) => {
    
    const found = state.products.find(productData => productData.product.id === newProduct.id)

    if(found == null) {
        const cartSubTotal = state.cartSubTotal + newProduct.price
        const cartTax = Number((cartSubTotal*(0.12)).toFixed(2))
        const cartTotal = Number((cartSubTotal*(1.12)).toFixed(2))
        const productItem = {
            product: newProduct,
            productQuantity: 1
        }
        return {
            ...state,
            cartSubTotal: cartSubTotal,
            cartTax: cartTax, 
            cartTotal: cartTotal,
            products: state.products.concat(productItem)
        }
    } else {
        return state
    }
}

const removeProductFromCart = (state, product) => {
    
    const found = state.products.find(productData => productData.product.id === product.id)

    if(found != null) {
        const cartSubTotal = state.cartSubTotal - product.price*found.productQuantity
        const cartTax = Number((cartSubTotal*(0.12)).toFixed(2))
        const cartTotal = Number((cartSubTotal*(1.12)).toFixed(2))

        return {
            ...state,
            cartSubTotal: cartSubTotal,
            cartTax: cartTax, 
            cartTotal: cartTotal,
            products: state.products.filter(productData => productData.product.id !== product.id)
        }
    } else {
        return state
    }
}

const changeProductQuanityInCart = (state, newProduct, newProductQuantity) => {
    
    const found = state.products.find(productData => productData.product.id === newProduct.id)

    if(found != null) {
        const cartSubTotal = state.cartSubTotal - newProduct.price*found.productQuantity + newProduct.price*newProductQuantity
        const cartTax = Number((cartSubTotal*(0.12)).toFixed(2))
        const cartTotal = Number((cartSubTotal*(1.12)).toFixed(2))
        const productItem = {
            product: newProduct,
            productQuantity: newProductQuantity
        }

        var updatedProducts = []
        for(var index = 0;index < state.products.length; index++) {
            if(state.products[index].product.id === newProduct.id) {
                updatedProducts.push(productItem)
            } else {
                updatedProducts.push(state.products[index])
            }

        }

        return {
            ...state,
            cartSubTotal: cartSubTotal,
            cartTax: cartTax, 
            cartTotal: cartTotal,
            products: updatedProducts
        }
    } else {
        return state
    }
}

export default reducer