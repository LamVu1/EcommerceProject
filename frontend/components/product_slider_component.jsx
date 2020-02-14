import React from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../reducers/products/product_reducer';
import { Link } from 'react-router-dom';
import ProductItem from './product_item_component';

class ProductSlider extends React.Component{ 
    constructor(){
        super();
    }

    

    render(){
        let {products} = this.props
        


        let productsdiv = Object.values(products).slice(0,5).map((product, idx)=>{
            
            return(
                <img className='slider-image' src={product.photoUrls[0]}></img>
            )
        })        
        
        return(
            <div className='slider'>
                <button>PREV</button>
                    {productsdiv}
                <button>NEXT</button>
            </div>
        
        )
    }
}

// const mapStateToProps = (state)=>{

//     return(
//         {
//             products: state.entities.products,   
//         }
//     )
// }


export default connect(null,null)(ProductSlider);
