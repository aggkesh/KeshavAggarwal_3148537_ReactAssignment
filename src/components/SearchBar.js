import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControl, Button, InputGroup } from "react-bootstrap";
import { fetchProducts } from '../redux';
import { useHistory  } from 'react-router-dom';
import { DEFAULT_SORT } from '../redux/productList/productsTypes';

function SearchBar({ productData, fetchProducts }) {
    const [search, setSearch] = useState("");
    const history = useHistory();

    return (
        <div className="d-flex justify-content-center w-50 ml-4">
            <InputGroup>
                <FormControl placeholder="Search.." value={ search } onChange={e => {
                    setSearch(e.target.value)
                    if(e.target.value === '') {
                        fetchProducts(e.target.value, 1, DEFAULT_SORT, history)
                    } else {
                        fetchProducts(e.target.value, productData.activePage, productData.sort, history)
                    }}} />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => fetchProducts(search, productData.activePage, productData.sort, history)}><i className="fa fa-search"></i></Button>
                </InputGroup.Append>
            </InputGroup>
        </div> 
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)