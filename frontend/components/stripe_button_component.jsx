import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_08Cg1mjCL4A42KCq1U7NijZn00oRJXQ362';

    const onToken = token => {
        alert('Payment Successful!')
    }
    // billingAddress
    // shippingAddress
    // email = 'Demo@email.com'
    
    return(
        <StripeCheckout
        label = 'Place Order'
        name = 'Shoe Shop'
        email = 'demo123@gmail.com'
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Place Order'
            token = {onToken}
            stripeKey = {publishableKey}
            allowRememberMe = {false}
        />
    )
};

export default StripeCheckoutButton;