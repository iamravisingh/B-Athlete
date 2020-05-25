import React from 'react';
import './checkout.-item.style.scss';
import { deleteCartItem , addItem , removeItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const CheckoutItem = ({ cartItem,deleteItem,addItem,removeItem }) => {
    const { name, price, quantity, imageUrl } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt = "item"/>
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick = {() => removeItem(cartItem)}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick = {() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>&#x20B9; {price}</span>
            <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);