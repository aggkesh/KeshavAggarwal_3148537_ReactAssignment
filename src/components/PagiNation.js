import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useHistory  } from 'react-router-dom';

function PagiNation({ productData, fetchProducts }) {

    const history = useHistory();
    const paginationItems = paginationItemsGenerator(productData, fetchProducts, history);
    const pages = numberOfPages(productData);

    return(
        <Pagination size="lg" className="d-flex justify-content-center m-4">
            <Pagination.Prev onClick={() => fetchProducts(productData.search, productData.activePage - 1, productData.sort, history) } disabled={ productData.activePage === 1 }/>
            { paginationItems }
            <Pagination.Next  onClick={() => fetchProducts(productData.search, productData.activePage + 1, productData.sort, history) } disabled={ productData.activePage === pages } />
        </Pagination>
    )
}

/**
 * Generate Diffent pages data
 * 
 * @param {*} productData populate products
 * @param {*} fetchProducts fuction to fetch products
 * @param {*} history history to move between app
 */
export const paginationItemsGenerator = (productData, fetchProducts, history) => {
    const paginationItems = [];
    const pages = numberOfPages(productData);

    for (let number = 1; number <= pages; number++) {
        paginationItems.push(
            <Pagination.Item key={ number } active={ number === productData.activePage } 
                onClick={() => fetchProducts(productData.search, number, productData.sort, history) } >
                { number }
            </Pagination.Item>,
        );
    }

    return paginationItems;
}

/**
 * Number of pages for pagination
 * 
 * @param {*} productData products to determine number of pages
 */
export const numberOfPages = (productData) => {
    return  Math.ceil(Number(productData.productTotalCount) / 8);
}

export default PagiNation