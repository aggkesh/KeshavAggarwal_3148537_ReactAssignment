import React from 'react';
import { Dropdown, Col } from 'react-bootstrap';
import { DEFAULT_SORT, LOW_TO_HIGH_SORT, HIGH_TO_LOW_SORT } from '../redux/productList/productsTypes';
import { useHistory  } from 'react-router-dom';

/**
 * Dashboard Header Ui 
 * 
 * @param {productData} product Data to show dashboard ui
 * @param {fetchProducts} function to fetch product from the store
 */
const DashboardHeader = ({ fetchProducts, productData }) => {
    const history = useHistory();
    const items = [DEFAULT_SORT, LOW_TO_HIGH_SORT, HIGH_TO_LOW_SORT];

    return (
        <React.Fragment>
                <Col>
                    <span className="display-4 font-weight-bold">Dashboard</span>
                </Col>
                <Col>
                    <Dropdown  className="float-right">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Sort
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                items.map(item => <Dropdown.Item key={ item } active={ productData.sort === item } onClick={
                                        () => fetchProducts(productData.search, productData.activePage, item, history)}>{ item }
                                    </Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
        </React.Fragment>
    )
}

export default DashboardHeader