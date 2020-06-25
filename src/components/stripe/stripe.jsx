import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton ({price}) {
    const priceForStripe = price * 100;
    
    const publishableKey = 'pk_test_51GsnIGEFHclC6JmJfWrKhW8o8crPGvzDpYND4GiCRqSjCHGCtxGS6uPk5fegZRW1tLkZKColY8GPaEkE0QWIVjrd00KxQZEivj'
    
    const onToken = token => {
        console.log(token);
        
        alert("Success payment");
    }

    return(
        <div>
            <StripeCheckout 
                className = "stripe"
                label = 'Pay Now'
                name = 'Batman Clothing Ltd.'
                billingAddress
                shippingAddress
                image = 'https://svgshare.com/i/M0J.svg'
                description = {`Your total is  $${price}`}
                amount = {priceForStripe}
                panelLabel ='Pay Now'
                token = {onToken}
                stripeKey ={publishableKey}


            />
        </div>
    )

};

export default StripeCheckoutButton;
