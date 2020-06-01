import { updateCollection } from './shop.type';

const INITIAL_STATE = {
    collection : null
}

const shopPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case updateCollection.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections : action.payload
            }
        default:
            return state;
    }

}

export default shopPageReducer;