import {TOGGLE_DROP_DOWN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART, RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, RECEIVE_CART_ITEM_DROP} from './cart_actions';

import { addItemToCart, removeItemFromCart } from './cart_utils';

const INITIAL_STATE = {
    hidden: true,   
    cartItems: []
};

const cartReducer = ( oldstate = INITIAL_STATE, action) =>{

    let nextState;
    Object.freeze(oldstate);
    switch (action.type){
        case TOGGLE_DROP_DOWN:
            return{
                ...oldstate,
                hidden: !oldstate.hidden
            }
        case RECEIVE_ALL_CART_ITEMS:
            return{
                ...oldstate,
                cartItems: action.items
            }
        case RECEIVE_CART_ITEM:
            
            
            nextState = Object.assign({}, oldstate);
            nextState.cartItems[action.item.id] = action.item
            return nextState;
       
        case CLEAR_ITEM_FROM_CART:
                
                nextState = Object.assign({}, oldstate);
                delete nextState.cartItems[action.item.id];
                return nextState;
                
          
        default:
            return oldstate;
    }
}

export default cartReducer;


// case TOGGLE_DROP_DOWN:
//             return{
//                 ...oldstate,
//                 hidden: !oldstate.hidden
//             }
//         case RECEIVE_ALL_CART_ITEMS:
//             return(
//                 Object.assign({}, action.items)
//             )
//         case RECEIVE_CART_ITEM:
//             if (action.item.id){
//                 return Object.assign({}, oldstate, { [action.item.id]: action.item });
//             }else {
//                 return oldstate;
//             }
//         case REMOVE_CART_ITEM:
//             nextState = Object.assign({}, oldstate);
//             delete nextState[action.item.id];
//             return nextState;