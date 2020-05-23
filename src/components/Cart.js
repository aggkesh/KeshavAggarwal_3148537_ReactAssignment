import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { fetchCart, clearCart } from '../redux';
import CartOrderItem from './CartOrderItem';
import CartItemRow from './CartItemRow';

const Cart = ({ cartData, fetchCart, clearCart}) => {
    return cartData && cartData.products && cartData.products.length <= 0 ? (
        <h2>Cart Is Empty</h2>
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
                    <CartOrderItem cartData={ cartData } />
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

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        clearCart: (product, productQuantity) => dispatch(clearCart(product, productQuantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)