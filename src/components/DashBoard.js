import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner, Row, Col } from 'react-bootstrap';
import ProductDeck from './ProductDeck';
import PagiNation from './PagiNation';
import { fetchProducts } from '../redux';
import DashboardHeader from './DashboardHeader';
import { useHistory  } from 'react-router-dom';

const DashBoard = ({ productData, fetchProducts }) => {
    const history = useHistory();

    useEffect(() => {
        fetchProducts(productData.search, productData.activePage, productData.sort, history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return productData.default ? ( <></> ) 
    : productData.loading ? (
        <Spinner animation="border" role="status" style={{width: "50px", height: "50px", position: "absolute", top:"0", bottom: "0", left: "0", right: "0", margin: "auto" }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : productData.error ? (
        <h2>productData.error</h2>
    ) : (
        <React.Fragment>
            <Row  className="mt-4 mr-4 ml-4">
                <DashboardHeader productData={ productData } fetchProducts={ fetchProducts } />
            </Row>
            <Row>
                <Col>
                    <ProductDeck products={ productData && productData.products ? productData.products : [] } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PagiNation productData={ productData } fetchProducts={ fetchProducts }/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        productData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (search, activePage, sort, history) => dispatch(fetchProducts(search, activePage, sort, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)