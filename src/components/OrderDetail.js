import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner, Table, Container, Image } from 'react-bootstrap';
import { fetchOrderDetail } from '../redux';
import { useHistory  } from 'react-router-dom';

const OrderDetail = (props) => {
    const { fetchOrderDetail, orderDetailData, authData } = props
    const history = useHistory();

    if(!authData.authenticated) {
        history.push('/error/401');
    }

    useEffect(() => {
        fetchOrderDetail(props.match.params.id, history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return orderDetailData.default ? ( <></> ) 
    : orderDetailData.loading ? (
        <Spinner animation="border" role="status" style={{width: "50px", height: "50px", position: "absolute", top:"0", bottom: "0", left: "0", right: "0", margin: "auto" }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : orderDetailData.error ? (
        <h2>orderDetailData.error</h2>
    ) : (
        <Container className="m-2">
            {
                renderOrderDetailHeader(orderDetailData.orderDetail)
            }
            {
                renderOrderDetailBody(orderDetailData.orderDetail.products)
            }
        </Container>
    )
}

const renderOrderDetailHeader = (orderDetail) => {
    return (
        <React.Fragment>
            <h2 className="mb-4">Order Detail</h2>
            <Table striped bordered hover className="w-50">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Order Id</td>
                        <td>{ orderDetail.id }</td>
                    </tr>
                    <tr>
                        <td>Number of Products</td>
                        <td>{ orderDetail.products.length }</td>
                    </tr>
                    <tr>
                        <td>DateTime</td>
                        <td>{ orderDetail.orderDateAndTime }</td>
                    </tr>                                                
                    <tr>
                        <td>Order Total</td>
                        <td>{ orderDetail.orderTotal }</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    )
}

const renderOrderDetailBody = (products) => {
    return (
        <React.Fragment>
            <h4 className="mb-4">Order Summary</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((productData, index) => 
                            <tr>
                                <td>{ index + 1 }</td>                        
                                <td><Image style={{ width:"150px", height:"150px" }} src={ productData.product.img } rounded /></td>
                                <td>{ productData.product.title }</td>
                                <td>{ productData.productQuantity }</td>
                                <td>{ productData.product.price } X { productData.productQuantity } = Rs { productData.product.price*productData.productQuantity }/-</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        orderDetailData: state.orderDetail,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderDetail: (orderId, history) => dispatch(fetchOrderDetail(orderId, history))    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)