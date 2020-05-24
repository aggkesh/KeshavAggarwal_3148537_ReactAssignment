import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DashBoard from './components/DashBoard';
import ProductDetail from "./components/ProductDetail";
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Orders from './components/Orders';
import OrderDetail from './components/OrderDetail';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
      <React.Fragment>
          <NavigationBar />
          <Switch>
              <Route path="/dashboard" component={ DashBoard } />
              <Route path="/signin" component={ SignIn } />
              <Route path="/productdetail/:id" component={ ProductDetail } />
              <Route path="/orders" component={ Orders } />
              <Route path="/orders" component={ Orders } />
              <Route path="/orderdetail/:id" component={ OrderDetail } />
              <Route path="/cart" component={ Cart } />
              <Route path="/error/:id" component= { ErrorPage } />
              <Route path="*" component= { ErrorPage } />
          </Switch>
        </React.Fragment>
  );
}

export default App;
