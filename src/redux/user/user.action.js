import userActionsTypes from './user.type'

const setCurrentUser = (user) => ({
    type: userActionsTypes.SET_CURRENT_USER,
    payload : user
})

export default setCurrentUser;

