import { 
    addProductCart,
    removeProductCart,
    changeProductQuantityInCart,
    clearCart
}  from './cartActions';
import { 
    ADD_PRODUCT_CART, 
    REMOVE_PRODUCT_CART, 
    CLEAR_CART, 
    CHANGE_PRODUCT_QUANTITY_IN_CART 
} from './cartTypes';

describe('Cart Actions', () => {

    it('Add Product In Cart Actions', () => {
        const product = {
            id: 1,
            name: "product1",
            price: 250
        }
        
        const expectedAction = {
            type: ADD_PRODUCT_CART,
            payload: product
        }

        expect(addProductCart(product)).toEqual(expectedAction);
    })

    it('Remove Product In Cart Actions', () => {
        const product = {
            id: 1,
            name: "product1",
            price: 250
        }
        
        const expectedAction = {
            type: REMOVE_PRODUCT_CART,
            payload: product
        }

        expect(removeProductCart(product)).toEqual(expectedAction);
    })

    it('Change Product Quantity In Cart Actions', () => {
        const product = {
            id: 1,
            name: "product1",
            price: 250
        }
        
        const expectedAction = {
            type: CHANGE_PRODUCT_QUANTITY_IN_CART,
            payload: product,
            productQuantity: 3
        }

        expect(changeProductQuantityInCart(product, 3)).toEqual(expectedAction);
    })

    it('Clear Cart Actions', () => {

        const expectedAction = {
            type: CLEAR_CART
        }

        expect(clearCart()).toEqual(expectedAction);
    })
})