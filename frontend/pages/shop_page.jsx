import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../reducers/products/product_actions';
import ProductItem from '../components/product_item_component';



class ShopPage extends React.Component {
   constructor(props){
       super(props);

   }
    componentDidMount(){
        this.props.fetchAllProducts()
    }
    
    render(){
        
        
        let products = this.props.products.map((product, id)=>{
            return(
                <ProductItem 
                key = {id}
                item = {product}
                />
            )
        })

        
       
        
        return(
            <div className='shop-page'>
                <div className='shop-page-shoes'>
                {products}
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    
    return(
        {
            products: Object.values(state.entities.products)
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchAllProducts: () => dispatch(fetchProducts())
})


export default connect(mapStateToProps, mapDispatchToProps )(ShopPage);
