import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react';
// import  { persistor }  from '../store/store';


import App from "./App";



const Root = ({ store }) => (

  <Provider store={store}>

      <HashRouter>
          

              <App />


          
      </HashRouter>

  </Provider>

);

export default Root;

