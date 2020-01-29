import {TOGGLE_DROP_DOWN, ADD_ITEM} from './cart_actions';
import { addItemToCart , removeItemFromCart} from './cart_utils';

const INITIAL_STATE = {
    hidden: true,   
    cartItems: []
};

const cartReducer = ( oldstate = INITIAL_STATE, action) =>{

    Object.freeze(oldstate);
    switch (action.type){
        case TOGGLE_DROP_DOWN:
            return{
                ...oldstate,
                hidden: !oldstate.hidden
            }
        case ADD_ITEM:
            return({...oldstate, cartItems: {...addItemToCart(oldstate.cartItems, action.payload)}})
            // return (Object.assign({}, oldstate, {cartItems: addItemToCart(oldstate.cartItems, action.payload)}))
            //     ...oldstate,
                
            //   };
        default:
            return oldstate;
    }
}

export default cartReducer;
