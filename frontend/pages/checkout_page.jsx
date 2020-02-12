import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/checkout_item_component';
import StripeCheckoutButton from '../components/stripe_button_component';

class CheckoutPage extends React.Component{
    constructor(){
        super()
    }

    totalPrice(){
        let total = this.props.cartItems.reduce((accumalatedQuantity, cartItem) =>
                  accumalatedQuantity + cartItem.quantity * cartItem.price,
                0
        )
        
        return total
    }
    
    render(){

        let items =  this.props.cartItems.map((item,idx)=>{
            return(
                <CheckoutItem 
                    key = {idx}
                    item = {item}
                />
            )
        })

        let totalAmount = this.totalPrice()
               
        return(
                <div className='checkout-page'>
                    <h1>Check Out</h1>
                    <div className='checkout-header'>
                        <div className='header-block'>
                            Product
                        </div>
                        <div className='header-block'>
                        Description
                        </div>
                        <div className='header-block'>
                        Size
                        </div>
                        <div className='header-block'>
                        Quantity
                        </div>
                        <div className='header-block'>
                        Price
                        </div>
                        <div className='header-block'>
                        </div>
                    </div>
                    {items}

                    <div className='checkout-bottom'>
                        <div className='header-block'></div>
                        <div className='header-block'></div>
                        <div className='header-block'></div>
                        <div className='header-block'></div>
                        <div className='total-price'>
                            <p>Total: </p>
                            <p>${totalAmount}</p>
                        </div>
                        <div className='header-block'></div>
                    </div>
                    <div className='test-warning'>
                        *Please use the following test credit card for payments*
                         <br />
                        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={totalAmount}/>
                </div>
        )
        
    }
    
}

const mapStateToProps = (state)=>{
    let cartItems = Object.values(state.entities.cart.cartItems);
    return(
        {
            cartItems: cartItems
        }
    )
}

// const mapDispatchToProps = dispatch => ({
//     fetchProduct: (id) => dispatch(fetchProduct(id)),
//     addItem: (item) => dispatch(addItem(item))
// })
export default connect(mapStateToProps)(CheckoutPage);

// export default Checkout;