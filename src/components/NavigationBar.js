import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

class NavigationBar extends Component {

    render() {
        return (
            <React.Fragment>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav className="w-75">
                  <Link to="/dashboard" className="nav-link">Home</Link>
                  <SearchBar></SearchBar>
                </Nav>
                <Nav>
                  <Link to="/cart" className="nav-link"><span className="mr-2"><i className="fas fa-cart-plus" /></span></Link>
                  <Link to="/signin" className="nav-link"><span className="mr-2"><i className="fas fa-user" /></span>Login</Link>
                  <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                </Navbar.Collapse>
              </Navbar>
          </React.Fragment>
        )
    }
}

export default NavigationBar