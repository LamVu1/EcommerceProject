import { TOGGLE_HOVER, TOGGLE_LOADER } from './ui_actions';

const INITIAL_STATE = {
    hidden: true,
    loader: false   
};


const uiReducer = (oldstate = INITIAL_STATE, action) => {
  Object.freeze(oldstate);
  switch(action.type) {
    case TOGGLE_HOVER:
      return{
        ...oldstate,
        hidden: !oldstate.hidden
    }
    case TOGGLE_LOADER:
      return{
        ...oldstate,
        loader: !oldstate.loader
      }
    default:
      return oldstate;
  }
};

export default uiReducer;
