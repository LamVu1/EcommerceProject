import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteCartItem, updateCartItem} from '../reducers/cart/cart_actions';
import { addItem, removeItem } from '../reducers/cart/cart_actions';


class CheckoutItem extends React.Component{
    constructor(){
        super(); 

        this.handleClearItem = this.handleClearItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);

    }

    handleClearItem(){
        this.props.deleteCartItem(this.props.item)
    }

    handleAddItem(){
        this.props.item.quantity+=1
        this.props.updateCartItem(this.props.item)
    }

    handleRemoveItem(){
        if(this.props.item.quantity===1){
            this.props.deleteCartItem(this.props.item)
        }else{
            this.props.item.quantity-=1
            this.props.updateCartItem(this.props.item)
        }
    }

    render(){

       

        let {item} = this.props
        
        return(
            <div className='check-out-item'>
                <div className='check-out-block'><Link to={`/product/${item.id}`}><img  className='check-out-image' src={item.photoUrls[0]}/></Link></div>
                <div className='check-out-block'> <Link to={`/product/${item.id}`}>{item.title} </Link></div>
                <div className='check-out-block'>{item.size}</div>

                <div className='check-out-block'>
                    <div className='checkout-item-btn' onClick={this.handleAddItem}><i className="fas fa-angle-up"></i></div>
                    {item.quantity}
                    <div className='checkout-item-btn' onClick={this.handleRemoveItem}><i className="fas fa-angle-down"></i></div>
                </div>
                <div className='check-out-block'>${item.quantity*item.price}</div>
                <div className='check-out-block'>
                    <div className='checkout-item-remove-btn' onClick={this.handleClearItem}><i className="fas fa-times"></i></div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state)=>{

//     return(
//         {
//             productId: ownProps.match.params.id,
//             product: Object.values(state.entities.products)[0]
//         }
//     )
// }

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    deleteCartItem: (item) => dispatch(deleteCartItem(item)), updateCartItem: (item) => dispatch(updateCartItem(item))

})

export default connect(null, mapDispatchToProps) (CheckoutItem);
