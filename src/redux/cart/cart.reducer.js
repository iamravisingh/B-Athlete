import cartActionType from './cart.type';

const INITIAL_STATE = {
    hidden : true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_MINI_CART:
            return {
                ...state,
                hidden : !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;