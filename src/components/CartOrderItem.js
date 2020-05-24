import React from 'react';
import { connect } from 'react-redux';
import { clearCart, placeOrder } from '../redux';
import { Table, Card, Button, ButtonGroup } from 'react-bootstrap';
import { useHistory  } from 'react-router-dom'

const CartOrderItem = ({ cartData, authData, clearCart, placeOrder }) => {
    const history = useHistory()

    return (
        <Card>
            <Card.Body>
                <Card.Title className="font-weight-bold">Order Detail</Card.Title>
                <Table striped bordered hover>
                    <tr>
                        <td>Cart SubTotal</td>
                        <td>{ cartData.cartSubTotal }</td>
                    </tr>
                    <tr>
                        <td>Cart Tax</td>
                        <td>{ cartData.cartTax }</td>
                    </tr>
                    <tr>
                        <td>Cart Total</td>
                        <td>{ cartData.cartTotal }</td>
                    </tr>
                </Table>
            </Card.Body>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-danger" onClick={() => clearCart()}>Clear Cart</Button>
                <Button variant="outline-success" onClick={() => placeOrder(cartData, authData, history)}>Place Order</Button>
            </ButtonGroup>
        </Card>            
    )
}

const mapStateToProps = state => {
    return {
        cartData: state.cart,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(clearCart()),
        placeOrder: (cart, authData, history) => {
            if(authData.authenticated) {
                dispatch(placeOrder(cart, authData.username, history))   
            } else {
                alert("You need to login to place order !!")
                history.push('/signin')
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrderItem)