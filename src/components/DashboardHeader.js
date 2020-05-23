import React from 'react';
import { Dropdown, Col } from 'react-bootstrap'
import { DEFAULT_SORT, LOW_TO_HIGH_SORT, HIGH_TO_LOW_SORT } from '../redux/productList/productsTypes';

const DashboardHeader = ({ fetchProducts, productData }) => {
    const items = [DEFAULT_SORT, LOW_TO_HIGH_SORT, HIGH_TO_LOW_SORT]
    return (
        <React.Fragment>
                <Col>
                    <h1 className="font-weight-bold">Dashboard</h1>
                </Col>
                <Col>
                    <Dropdown  className="float-right">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Sort
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                items.map(item => <Dropdown.Item active={ productData.sort === item } onClick={() => fetchProducts(productData.search, productData.activePage, item)}>{ item }</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
        </React.Fragment>
    )
}

export default DashboardHeader