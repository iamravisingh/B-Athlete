import userActionsTypes from './user.type'

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    console.log('actions in userReducer?>>>>>>>>>>>>>>>>', state,action);
    switch (action.type) {
        case userActionsTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : action.payload
            }
        default:
            return state
    }
}


export default userReducer;