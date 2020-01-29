import React from "react";
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './route_utils';

// import HomePage from '../pages/homepage/homepage_component';
// import SignInPage from '../pages/signin/signin_component';
// import SignUpPage from '../pages/signup/signup_component';
// import HeaderBar from '../components/header_bar/header_bar_component';
// import ShopPage from '../pages/shop/shop_component';
// import productDetail from '../pages/product_detail/product_detail_component';
// import Checkout from '../pages/checkout/checkout_component';

import LandingPage from '../pages/landing';
import ShopPage from '../pages/shop_page';
import NagivationBar from '../components/navigation_bar_component';
import productDetail from '../pages/product_detail_page';
import CheckoutPage from '../pages/checkout_page';

const App = () => (
  
  <div className="main-div">
    <NagivationBar />
     <Switch>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/product/:id' component={productDetail}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route  path='/' component={LandingPage}/> 
        <Redirect to="/" />
     </Switch>
  </div>
  
);

export default App;