import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartIcon = ({toggleCartHidden,itemCount }) => (
    <div className='cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart : {cartItems}}) => ({
    itemCount : cartItems.reduce((acc,cartItem) => acc + cartItem.quantity,0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);