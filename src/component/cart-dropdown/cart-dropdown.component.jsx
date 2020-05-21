import React from 'react'
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import { selectCartItems } from '../../redux/cart/cart.selector'
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItems,history,dispatch}) => {
    console.log('cartItems>>>>>>>>>>>>>>', cartItems);
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
                { cartItems.length ? 
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <span className='empty-message'>Your Cart is Empty</span>}
                <CustomButton onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden())
                }}>CHECKOUT</CustomButton> 
        </div>
    </div>
)}

const mapStateToProps = state => ({ 
    cartItems: selectCartItems(state),
    toggleCartHidden : toggleCartHidden(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));