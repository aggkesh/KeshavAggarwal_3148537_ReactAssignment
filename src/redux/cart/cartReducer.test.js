import reducer from './cartReducer';
import { 
    addProductCart,
    removeProductCart,
    changeProductQuantityInCart,
    clearCart
}  from './cartActions';

describe('cart reducers', () => {

    it('Invalid Action In Cart Reducer', () => {
        const expectedState = {
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            products: []
        }
    
        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Add Product In Cart Reducer', () => {
        const product = {
            id: 1,
            name: "product1",
            price: 100,
        }   
        const expectedState = {
            cartSubTotal: 100,
            cartTax: 12,
            cartTotal: 112,
            products: [{
                product: product,
                productQuantity: 1
            }]
        }
        const action = addProductCart(product)
        expect(reducer(undefined, action)).toEqual(expectedState)
    })

    it('Remove Product In Cart Reducer', () => {
        const product1 = {
            id: 1,
            name: "product1",
            price: 100,
        }

        const product2 = {
            id: 2,
            name: "product2",
            price: 100,
        }   

        const state = {
            cartSubTotal: 200,
            cartTax: 24,
            cartTotal: 224,
            products: [{
                product: product1,
                productQuantity: 1
            }, {
                product: product2,
                productQuantity: 1
            }]
        }

        const expectedState = {
            cartSubTotal: 100,
            cartTax: 12,
            cartTotal: 112,
            products: [{
                product: product2,
                productQuantity: 1
            }]
        }

        const action = removeProductCart(product1)
        expect(reducer(state, action)).toEqual(expectedState)
    })

    it('Change Product Quantity In Cart Reducer', () => {
        const product1 = {
            id: 1,
            name: "product1",
            price: 100,
        }

        const product2 = {
            id: 2,
            name: "product2",
            price: 100,
        }   

        const state = {
            cartSubTotal: 200,
            cartTax: 24,
            cartTotal: 224,
            products: [{
                product: product1,
                productQuantity: 1
            }, {
                product: product2,
                productQuantity: 1
            }]
        }

        const expectedState = {
            cartSubTotal: 300,
            cartTax: 36,
            cartTotal: 336,
            products: [{
                product: product1,
                productQuantity: 2
            }, {
                product: product2,
                productQuantity: 1
            }]
        }

        const action = changeProductQuantityInCart(product1, 2)
        expect(reducer(state, action)).toEqual(expectedState)
    })

    it('Clear Cart Reducer', () => {
        const product1 = {
            id: 1,
            name: "product1",
            price: 100,
        }

        const product2 = {
            id: 2,
            name: "product2",
            price: 100,
        }   

        const state = {
            cartSubTotal: 200,
            cartTax: 24,
            cartTotal: 224,
            products: [{
                product: product1,
                productQuantity: 1
            }, {
                product: product2,
                productQuantity: 1
            }]
        }

        const expectedState = {
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            products: []
        }

        const action = clearCart()
        expect(reducer(state, action)).toEqual(expectedState)
    })
})