import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure
} from './productsActions';
import { 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,
    DEFAULT_SORT
} from './productsTypes';

describe('Products Actions', () => {

    it('Fetch Products Request Actions', () => {
        const expectedActions = {
            type: FETCH_PRODUCTS_REQUEST
        }      

        expect(fetchProductsRequest()).toEqual(expectedActions)
    })

    it('Fetch Products Success Actions', () => {
        const products = [
            {
                id: 1,
                title: "product1",
                price: 2000
            },
            {
                id: 2,
                title: "product2",
                price: 4000
            }
        ]
        const productTotalCount = 2
        const search = "prod"
        const activePage = 1
        const sort = DEFAULT_SORT

        const expectedActions = {
            type: FETCH_PRODUCTS_SUCCESS,
            productTotalCount: productTotalCount,
            search: search,
            activePage: activePage,
            sort: sort,
            payload: products
        }      

        expect(fetchProductsSuccess(products, productTotalCount, search, activePage, sort))
        .toEqual(expectedActions)
    })

    it('Fetch Products Failure Actions', () => {
        const error = {
            error: 'error'
        }
        const expectedActions = {
            type: FETCH_PRODUCTS_FAILURE,
            payload: error
        }      

        expect(fetchProductsFailure(error)).toEqual(expectedActions)
    })
})