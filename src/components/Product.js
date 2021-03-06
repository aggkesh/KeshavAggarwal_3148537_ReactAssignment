import React from "react";
import { connect } from 'react-redux';
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addProductCart } from '../redux';

/**
 * Product Ui
 * 
 * @param {*} products list of products
 * @param {*} addProductCart fucntion to add product to cart
 * @param {*} cartData cart Data to find list of products
 */
const Product = ({ product, addProductCart, cartData }) => {

    const isProductInCart = isProductPresentInCart(cartData.products, product)

    return (
        <Card key={ product.id }>
            <Card.Img variant="top" src={ product.img } style={{ width:"250px", height:"250px" }}/>
            <Card.Body>
                <Card.Title>{ product.title }</Card.Title>
                <span>Rs { product.price }/-</span>
            </Card.Body>
            <ButtonGroup aria-label="Basic example">
                <Link to={ "/productdetail/" + product.id } className="btn btn-outline-primary">View</Link>
                <Button variant="outline-secondary" onClick={() => addProductCart(product) } disabled={ isProductInCart } >
                    { isProductInCart ? "In Cart" : "Add To Cart" }
                </Button>
            </ButtonGroup>
        </Card>       
    ) 
}

const isProductPresentInCart = (products, product) => {
    const found  = products.find(p => p.product.id === product.id)
    return found != null
}

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductCart: product => dispatch(addProductCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
