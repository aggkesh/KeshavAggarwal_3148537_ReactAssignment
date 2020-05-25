import React from 'react';
import { connect } from 'react-redux';
import { removeProductCart, changeProductQuantityInCart } from '../redux';
import { Image, Row, Col, Dropdown, Button } from 'react-bootstrap';

/**
 * UI to show Row in Cart 
 * 
 * @param {CartItemRow} ui to show row in cart 
 */
const CartItemRow = ({ product, productQuantity, removeProductCart, changeProductQuantityInCart }) => {
    return (
        <tr>
            <td className="w-25">
                <Image style={{ width:"250px", height:"250px" }} src={ product.img } rounded />
            </td>
            <td>
                <Row className="mt-4">
                    <Col>
                        <h3 className="font-weight-bold">{ product.title }</h3>
                    </Col> 
                </Row>
                <Row className="mt-3">
                    <Col>
                        <h5>Price: { product.price }/-</h5>
                    </Col>
                </Row>
                <Row className="mt-5">    
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                Quantity { productQuantity }
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    Array.from(Array(10).keys()).map(
                                        value => <Dropdown.Item key={ value + 1 } onClick={() => changeProductQuantityInCart(product, value + 1)}>{ value + 1 }</Dropdown.Item>                                    
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>    
                        <Button variant="outline-danger" className="float-right" onClick={() => removeProductCart(product) }>Remove</Button>
                    </Col>
                </Row>
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductCart: product => dispatch(removeProductCart(product)),
        changeProductQuantityInCart: (product, productQuantity) => dispatch(changeProductQuantityInCart(product, productQuantity))
    }
}

export default connect(null, mapDispatchToProps)(CartItemRow)