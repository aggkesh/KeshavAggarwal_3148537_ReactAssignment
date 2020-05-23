import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControl, Button, InputGroup } from "react-bootstrap"
import { fetchProducts } from '../redux';

function SearchBar({ productData, fetchProducts }) {
    const [search, setSearch] = useState("");

    return (
        <div className="d-flex justify-content-center w-75 ml-4">
            <InputGroup>
                <FormControl placeholder="Search.." value={search} onChange={e => {
                    setSearch(e.target.value)
                    fetchProducts(e.target.value, productData.activePage, productData.sort) }} />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => fetchProducts(search, productData.activePage, productData.sort)}><i className="fa fa-search"></i></Button>
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
        fetchProducts: (search, activePage, sort) => dispatch(fetchProducts(search, activePage, sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)