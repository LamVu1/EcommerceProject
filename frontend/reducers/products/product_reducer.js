import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT
  } from '../products/product_actions';




  const productsReducer = (oldstate = {}, action) => {
    
    Object.freeze(oldstate);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
          return({...oldstate, ...action.product})
          // return( Object.assign({}, oldstate, action.product))
        default:
            return oldstate;
    }
  };
  
  export default productsReducer;