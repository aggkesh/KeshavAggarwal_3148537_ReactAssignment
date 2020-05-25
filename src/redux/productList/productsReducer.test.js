import reducer from './productsReducer';
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure
} from './productsActions';
import {
    DEFAULT_SORT, HIGH_TO_LOW_SORT
} from './productsTypes'

describe('Products Reducer', () => {

    it('Invalid Actions In Products Reducer', () => {
        const expectedState = {
            default: true,
            loading: false,
            search: '',
            activePage: 1,
            sort: DEFAULT_SORT,
            productTotalCount: 0,
            products: [],
            error: ''
        }

        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('Fetch Products Request Action In Products Reducer', () => {
        const expectedState = {
            default: false,
            loading: true,
            search: '',
            activePage: 1,
            sort: DEFAULT_SORT,
            productTotalCount: 0,
            products: [],
            error: ''
        }

        expect(reducer(undefined, fetchProductsRequest())).toEqual(expectedState)
    })

    it('Fetch Products Success In Products Reducer', () => {

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
        const activePage = 3
        const sort = HIGH_TO_LOW_SORT

        const expectedState = {
            default: true,
            loading: false,
            search: search,
            activePage: activePage,
            sort: sort,
            productTotalCount: productTotalCount,
            products: products,
            error: ''
        }

        expect(reducer(undefined, fetchProductsSuccess(products, productTotalCount, search, activePage, sort)))
        .toEqual(expectedState)
    })

    it('Fetch Products Failure In Products Reducer', () => {

        const error = {
            error: 'error'
        }

        const expectedState = {
            default: true,
            loading: false,
            search: '',
            activePage: 1,
            sort: DEFAULT_SORT,
            productTotalCount: 0,
            products: [],
            error: error
        }

        expect(reducer(undefined, fetchProductsFailure(error)))
        .toEqual(expectedState)
    })

})