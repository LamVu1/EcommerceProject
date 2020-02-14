import { TOGGLE_HOVER } from './ui_actions';

const INITIAL_STATE = {
    hidden: true,   
};


const uiReducer = (oldstate = INITIAL_STATE, action) => {
  Object.freeze(oldstate);
  switch(action.type) {
    case TOGGLE_HOVER:
      return{
        ...oldstate,
        hidden: !oldstate.hidden
    }
    default:
      return oldstate;
  }
};

export default uiReducer;
