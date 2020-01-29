import React from 'react';


const CheckoutItem = ({item})=>{
    
    return(
        <div className='check-out-item'>
            <span><img  className='item-image' src={item.photoUrls[0]}/></span>
            <span>{item.title}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <button>X</button>
        </div>
    )
}

export default CheckoutItem;