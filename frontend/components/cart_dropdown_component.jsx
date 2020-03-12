import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../reducers/cart/cart_actions';
import {deleteCartItem} from '../reducers/cart/cart_actions';
import { toggleLoader } from '../reducers/ui/ui_actions';



class CartDropDown extends React.Component{
    constructor(){
        super();
    }


    render(){
        
        let {cartItems, deleteCartItem} = this.props

        let itemList = cartItems.map((item,idx)=>{
            return(
                <div className='cart-item' key={idx}>
                    <img key={`image${idx}`} className='cart-image' src={item.photoUrls}/>
                    <div  className='cart-item-detail'>
                    <div  className='cart-dropdow-clear' onClick={()=>deleteCartItem(item)}><i className="fas fa-times"></i></div>
                        <p key={`title${idx}`}>{item.title}</p>
                        <div className='cart-item-sizeqty'>
                        <p key={`size${idx}`}>size: {item.size}</p>
                        <p key={`quantity${idx}`}>qty: {item.quantity}</p>

                        </div>
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
                    this.props.toggleCartHidden()
                    this.props.toggleLoader()
                    setTimeout(()=>{this.props.toggleLoader()}, 500);
                    }}>
                        Checkout
                </button>
            </div>        
        )
    }
} 
    



const mapStateToProps = (state, ownProps)=>({
    history: ownProps.history
  });

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    deleteCartItem: (item) => dispatch(deleteCartItem(item)),  
    toggleLoader: () => dispatch(toggleLoader())

  
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));