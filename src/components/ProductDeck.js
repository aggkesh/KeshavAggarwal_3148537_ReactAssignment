import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Product from "./Product";

class ProductDeck extends Component {

    render() {
        const { products } = this.props

        const productList = [...products]
        const productCardDeckItem = []
        
        for(var index = 0; productList.length > 0; index++) {
            productCardDeckItem.push(
                <CardDeck key={ index } className="m-3">
                    { productList.splice(0, 4).map(product => <Product key={ product.id } product={ product } />) }
                </CardDeck>
            )
        }

        return (
            <React.Fragment>
                { productCardDeckItem }
            </React.Fragment>
        )
    }

}

export default ProductDeck