import {
    RECEIVE_ALL_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
  } from './like_actions';




  // return Object.assign({},state, { [action.currentUser.id]:action.currentUser });


  const likesReducer = (oldstate = {}, action) => {
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
          return Object.assign({}, action.likes);
            // return {...oldstate, action.products;}
        case RECEIVE_LIKE:
          nextState = Object.assign({}, oldstate, action.like);
          return nextState;
        case REMOVE_LIKE:
          
            nextState = Object.assign({}, oldstate)
            delete nextState[action.like.id]
            return nextState;            
        default:
            return oldstate;
    }
  };
  
  export default likesReducer;