import SHOP_DATA from '../../pages/shop/shop.date';

const INITIAL_STATE = {
    collection : SHOP_DATA
}

const shopPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return state;
    }

}

export default shopPageReducer;