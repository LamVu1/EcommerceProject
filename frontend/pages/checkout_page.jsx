import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/checkout_item_component';

class CheckoutPage extends React.Component{
    constructor(){
        super()
        
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
        
        
        return(
                <div className='checkout-page'>
                    <h1>Check Out</h1>
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
                        <div className='header-block'>
                            <span>Remove</span>
                        </div>
                    </div>
                  {items}
                </div>
        )

    }
    
}

const mapStateToProps = (state)=>{
    let cartItems = Object.values(state.cart.cartItems);
    let currentUser = state.users
    return(
        {
            cartItems: cartItems,
            currentUser: currentUser
        }
    )
}

// const mapDispatchToProps = dispatch => ({
//     fetchProduct: (id) => dispatch(fetchProduct(id)),
//     addItem: (item) => dispatch(addItem(item))
// })
export default connect(mapStateToProps)(CheckoutPage);

// export default Checkout;