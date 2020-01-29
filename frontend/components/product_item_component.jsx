import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem =({item})=> {
    return(
        <div className='item'>
            <Link to={`/product/${item.id}`}>
                <img className='item-image' src={item.photoUrls[0]}/>
            </Link>
            <div className='item-detail'>
                <Link to={`/product/${item.id}`}>
                    <div className='item-title'>{item.title}</div> 
                </Link>
                <div className='item-price'>${item.price}</div>
            </div>
        </div>
    )

}

export default ProductItem;