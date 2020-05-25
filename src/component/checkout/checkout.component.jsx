import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import {createStructredSelector} from 'reselect'
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../checkout-item.component/checkout-item.component';
import StripeCheckoutButton from '../stripe-payment/stripe-payment.component'

const CheckoutPage = ({ cartItems, total }) => {
    console.log('cartItems, total >>>>>>>>>>>>',cartItems, total )
    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div>
                <div className='total'>
                    <span> Total:  &#x20B9; {total}</span>
                </div>
                <StripeCheckoutButton price={total}/>
            </div>
    </div>
)}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total : selectCartItemTotal(state) 
})

export default connect(mapStateToProps)(CheckoutPage);