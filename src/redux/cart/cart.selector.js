import { createSelector } from 'reselect';


const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,curr) => acc + curr.quantity,0)
)

export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,curr) => acc + curr.quantity * curr.price,0)
)