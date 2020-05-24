import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Image, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { fetchProductDetail, addProductCart } from '../redux';
import { useHistory  } from 'react-router-dom';

const ProductDetail = (props) => {
    
    const { productDetailData, fetchProductDetail, addProductCart, cartData } = props
    const history = useHistory()

    useEffect(() => {
        fetchProductDetail(props.match.params.id, history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return productDetailData.default ? ( <></> ) 
    : productDetailData.loading ? (
        <Spinner animation="border" role="status" style={{width: "50px", height: "50px", position: "absolute", top:"0", bottom: "0", left: "0", right: "0", margin: "auto" }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : productDetailData.error ? (
        <h2>productDetailData.error</h2>
    ) : (
        productDetailData && productDetailData.productDetail 
        && renderProduct(cartData.products, productDetailData.productDetail, addProductCart)
    )
}

const renderProduct = (products, product, addProductCart) => {
    
    const isProductInCart = isProductPresentInCart(products, product)

    return ( <Container className="m-4">
                <Row>
                    <Col><Image src={ product.img } rounded /></Col>
                    <Col>
                        <Row className="mb-3">
                            <Col><h1 className="font-weight-bold">{ product.title }</h1></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col><h5>Some Info About Product</h5></Col>
                        </Row>
                        <Row className="mb-3">  
                            <Col>
                                <p>{ product.info }</p>
                            </Col>
                        </Row> 
                        <Row className="mb-3"> 
                            <Col><h5>Price : Rs. { product.price }/-</h5></Col> 
                        </Row>
                        <Row className="mb-3">       
                            <Col>                        
                                <Button variant="outline-secondary" className="mr-2" onClick={() => addProductCart(product)} disabled={ isProductInCart }>
                                    { isProductInCart ? "In Cart" : "Add To Cart" }
                                </Button>
                                <Link to="/dashboard" className="btn btn-outline-primary">Back To Products</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
             </Container>
            )         
}

const isProductPresentInCart = (products, product) => {
    const found  = products.find(p => p.product.id === product.id)
    return found != null
}

const mapStateToProps = (state) => {
    return {
        productDetailData: state.productDetail,
        cartData: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductDetail: (productId, history) => dispatch(fetchProductDetail(productId, history)),
        addProductCart: product => dispatch(addProductCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)