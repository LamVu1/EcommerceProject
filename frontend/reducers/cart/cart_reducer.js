import {TOGGLE_DROP_DOWN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART} from './cart_actions';

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
        case ADD_ITEM:
            return{
                ...oldstate,
                cartItems: addItemToCart(oldstate.cartItems, action.payload
                )
              
            }
        case REMOVE_ITEM:
            return {
                ...oldstate,
                cartItems: removeItemFromCart(oldstate.cartItems, action.payload)
            };
        case CLEAR_ITEM_FROM_CART:
            
            // return {
            //     ...oldstate,
            //     cartItems: oldstate.cartItems.filter(
            //     cartItem => {cartItem.size !== action.payload.size
            //     }
            //     )
            // };
            
            return {
                ...oldstate,
                cartItems: oldstate.cartItems.filter(item => (item.id !==action.payload.id) ||  (item.id ===action.payload.id && item.size !==action.payload.size))

            };
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