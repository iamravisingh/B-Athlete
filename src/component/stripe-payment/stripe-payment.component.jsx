import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const publishKey = 'pk_test_leW1eSZiAkzvgOnp8SyFb7s600574NteMi';
    const amount = price * 100
    const  onToken = token => {
        console.log('token with stripe payment for backend>>>>>>>', token);
        alert('payment successful!')
    }
    return (
        <StripeCheckout
            label='Place Order'
            name='B-Athlete'
            panelLabel ='Place Order'
            shippingAddress
            billingAddress
            image='%PUBLIC_URL%/Bathlete-logo.png'
            currency='INR'
            amount={amount}
            token={onToken}
            stripeKey = {publishKey}
            
        /> 
    )
}

export default StripeCheckoutButton