import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../reducers/cart/cart_actions';



class CartDropDown extends React.Component{
    constructor(){
        super();
        
    }
    
    render(){
        
        let {cartItems} = this.props

        let itemList = cartItems.map((item,idx)=>{
            return(
                <div className='cart-item' key={idx}>
                    <img key={`image${idx}`} className='item-page-image' src={item.photoUrls}/>
                    <div  className='cart-item-detail'>
                        <p key={`title${idx}`}>{item.title}</p>
                        <p key={`size${idx}`}>size: {item.size}</p>
                        <p key={`quantity${idx}`}>quantity: {item.quantity}</p>
                        <p key={`price${idx}`}>${item.price}</p>
                    </div>
    
                </div>
            )
        })

        
        return(
            <div className='cart-dropdown'>
                <ul  className='cart-items'>
                    {itemList}
                </ul>
                <button className='cart-dropdown-button'onClick={() => {
                    this.props.history.push('/checkout');
                    this.props.toggleCartHidden()}}>
                        Checkout
                </button>
            </div>        
        )
    }
} 
    



const mapStateToProps = (state, ownProps)=>({
    cartItems: Object.values(state.entities.cart.cartItems),
    history: ownProps.history
  });

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));