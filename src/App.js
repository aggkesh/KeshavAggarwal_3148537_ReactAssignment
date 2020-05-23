import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DashBoard from './components/DashBoard';
import ProductDetail from "./components/ProductDetail";
import SignIn from './components/SignIn';
import Cart from './components/Cart';

function App() {
  return (
      <React.Fragment>
          <NavigationBar />
          <Switch>
              <Route exact path="/dashboard" component={ DashBoard } />
              <Route exact path="/signin" component={ SignIn } />
              <Route exact path="/productdetail/:id" component={ ProductDetail } />
              <Route path="/cart" component={ Cart } />
              {/* <Route component={ DashBoard } /> */}
          </Switch>
        </React.Fragment>
  );
}

export default App;
