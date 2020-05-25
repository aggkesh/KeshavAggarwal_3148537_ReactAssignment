import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner, Table, Container, Image } from 'react-bootstrap';
import { fetchOrders } from '../redux';
import { Link, useHistory } from "react-router-dom";

const Orders = ({ authData, ordersData, fetchOrders }) => {
    const history = useHistory();

    if(!authData.authenticated) {
        history.push('/error/401');
    }

    useEffect(() => {
        fetchOrders(authData.username, history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ordersData.default ? ( <></> ) 
    : ordersData.loading ? (
        <Spinner animation="border" role="status" style={{width: "50px", height: "50px", position: "absolute", top:"0", bottom: "0", left: "0", right: "0", margin: "auto" }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : ordersData.error ? (
        <h2>ordersData.error</h2>
    ) : (
        ordersData && ordersData.length <= 0 ? (
            <div className="p-4 d-flex justify-content-center">
                <Image src={ '/img/noorderfound.png' } className="w-50"></Image>
            </div>
        ) : (
            <Container className="m-2">
                <h2 className="mb-4">List of Orders Placed</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Number of Products</th>
                            <th>DateTime</th>
                            <th>Order Total</th>
                            <th>Order Detail</th>
                        </tr>
                            </thead>
                            <tbody>
                                {
                                    ordersData.orders.map(order => 
                                        <tr key={ order.id } >
                                            <td>{ order.id }</td>
                                            <td>{ order.products.length }</td>
                                            <td>{ order.orderDateAndTime }</td>
                                            <td>{ order.orderTotal }</td>
                                            <td><Link to={ "/orderdetail/" + order.id } className="btn btn-outline-primary">View Order</Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                </Table>
            </Container>
        )
    )
}

const mapStateToProps = state => {
    return {
        ordersData: state.orders,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (username, history) => dispatch(fetchOrders(username, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)