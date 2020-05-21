import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartHidden,itemCount }) => (
    <div className='cart-icon' onClick = {toggleCartHidden} onMouseEnter={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount : selectCartItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);