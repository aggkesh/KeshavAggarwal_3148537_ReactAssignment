import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';

const CartOrderItem = ({ cartData }) => {
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
            <Button variant="secondary">Place Order</Button>
        </Card>            
    )
}

export default CartOrderItem