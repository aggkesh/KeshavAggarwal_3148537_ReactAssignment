import React from "react";
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { logout } from '../redux';
import { useHistory  } from 'react-router-dom'

const NavigationBar = ({ authData, logout }) => {
  const history = useHistory()

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
            {
              authData.authenticated ? ( 
                <NavDropdown title={ authData.username } id="basic-nav-dropdown">
                  <NavDropdown.Item  onClick={() => history.push('/orders')}>My Order</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (<Link to="/signin" className="nav-link"><span className="mr-2"><i className="fas fa-user" /></span>Login</Link>) 
            }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
}

const mapStateToProps = state => {
  return {
      authData: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)