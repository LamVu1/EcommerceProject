import * as APIUtil from './cart_api_utils';

export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';
export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS'; 
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const RECEIVE_CART_ITEM_DROP = 'RECEIVE_CART_ITEM_DROP';




export const toggleCartHidden = () => ({
    type: TOGGLE_DROP_DOWN
});

const receiveAllCartItems = (items) => ({
    items: items,
    type: RECEIVE_ALL_CART_ITEMS
});

const receiveCartItem = (item) => ({
    item: item,
    type: RECEIVE_CART_ITEM
});

const receiveCartItemDrop = (item) => ({
    item: Object.values(item)[0],
    type: RECEIVE_CART_ITEM
});

  
const clearItemFromCart = (item) => {
  
  return(
  {type: CLEAR_ITEM_FROM_CART,
  item: Object.values(item)[0]}
  )};


export const createCartItem = (item)=>(dispatch)=>{

return(
    APIUtil.createCartItem(item).then(item => dispatch(receiveCartItemDrop(item)))
)
}

export const fetchCartItems = ()=>(dispatch)=>{
  
  return(
      APIUtil.fetchCartItems().then(items => dispatch(receiveAllCartItems(items)))
  )
  }
  
  export const fetchCartItem = (item)=>(dispatch)=>{
  
  return(
      APIUtil.fetchCartItem(item).then(item => dispatch(receiveCartItem(item)))

  )
  }
    
export const deleteCartItem = (item)=>(dispatch)=>{

return(
    APIUtil.deleteCartItem(item).then( item => dispatch(clearItemFromCart(item)))
)
}


export const updateCartItem = (item)=>(dispatch)=>{

return(
    APIUtil.updateCartItem(item).then( item => 
        {
            dispatch(receiveCartItem(Object.values(item)[0]))})
)
}
    
