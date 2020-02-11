import * as APIUtil from './cart_api_utils';

export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';
// export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS'; 
// export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
// export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';



export const toggleCartHidden = () => ({
    type: TOGGLE_DROP_DOWN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
  });
  
export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});












// const receiveAllCartItems = (items) => ({
//     items: items,
//     type: RECEIVE_ALL_CART_ITEMS
// });

// const receiveCartItem = (item) => ({
//     item: item,
//     type: RECEIVE_CART_ITEM
// });

// const removeCartItem = (item) => ({
//     item: item,
//     type: REMOVE_CART_ITEM
// });

// export const fetchCartItems = ()=>(dispatch)=>{
    
// return(
//     APIUtil.fetchCartItems().then( items => dispatch(receiveAllCartItems(items)))
// )
// }

// export const fetchCartItem = (item)=>(dispatch)=>{

// return(
//     APIUtil.fetchCartItem(item).then( item => dispatch(receiveCartItem(item)))
// )
// }


// export const createCartItem = (item)=>(dispatch)=>{

// return(
//     APIUtil.createCartItem(item).then( item => dispatch(receiveCartItem(item)))
// )
// }

// export const updateCartItem = (item)=>(dispatch)=>{

// return(
//     APIUtil.updateCartItem(item).then( item => dispatch(receiveCartItem(item)))
// )
// }
    
// export const deleteCartItem = (item)=>(dispatch)=>{

// return(
//     APIUtil.deleteCartItem(item).then( item => dispatch(removeCartItem(item)))
// )
// }