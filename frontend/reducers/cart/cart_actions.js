export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';
export const ADD_ITEM = 'ADD_ITEM';


export const toggleCartHidden = () => ({
    type: TOGGLE_DROP_DOWN
});

export const addItem = (item)=>({
    payload: item,
    type: ADD_ITEM
})

