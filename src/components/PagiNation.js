import React from 'react';
import { Pagination } from 'react-bootstrap';

function PagiNation({ productData, fetchProducts }) {
    
    const paginationItems = [];
    const pages = Math.ceil(Number(productData.productTotalCount) / 8)

    for (let number = 1; number <= pages; number++) {
        paginationItems.push(
            <Pagination.Item key={ number } active={ number === productData.activePage } 
                onClick={() => fetchProducts(productData.search, number, productData.sort) } >
                { number }
            </Pagination.Item>,
        );
    }

    return(
        <Pagination size="lg" className="d-flex justify-content-center m-4">
            <Pagination.Prev onClick={() => fetchProducts(productData.search, productData.activePage - 1, productData.sort) } disabled={ productData.activePage === 1 }/>
            { paginationItems }
            <Pagination.Next  onClick={() => fetchProducts(productData.search, productData.activePage + 1, productData.sort) } disabled={ productData.activePage === pages } />
        </Pagination>
    )
}

export default PagiNation