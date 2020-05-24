import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col, Image } from 'react-bootstrap';
import CartOrderItem from './CartOrderItem';
import CartItemRow from './CartItemRow';

const Cart = ({ cartData }) => {
    return cartData && cartData.products && cartData.products.length <= 0 ? (
        <div className="p-4 d-flex justify-content-center">
            <Image src={ '/img/emptycart.png' } className="w-50"></Image>
        </div>
    ) : ( <Container className="m-2">
            <h1 className="font-weight-bold">Cart</h1>
            <Row>
                <Col sm={9}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Product Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.products.map(productData => <CartItemRow product={ productData.product } productQuantity={ productData.productQuantity } />)
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col sm={3}>
                    <CartOrderItem />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

export default connect(mapStateToProps, null)(Cart)