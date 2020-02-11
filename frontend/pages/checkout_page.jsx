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