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
import Footer from '../components/footer_component';
import SignIn from '../components/sign_in_component';
import SignUp from '../components/sign_up_component';
import Loader from '../components/loader';
import ProfilePage from '../pages/profile_page';


const App = () => (
  
  <div className="main-div">
    <Loader />
    <NagivationBar />
      <Switch>
        <ProtectedRoute exact path='/shop' component={ShopPage} />
        <ProtectedRoute exact path='/product/:id' component={productDetail}/>
        <ProtectedRoute exact path='/profile/:id' component={ProfilePage}/>
        <ProtectedRoute exact path='/checkout' component={CheckoutPage}/> 
        <AuthRoute  path='/' component={LandingPage}/> 
        <Redirect to='/' />
     </Switch>
    <Footer />
  </div>
  
  );
  
export default App;