import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../reducers/products/product_actions';
import ProductItem from '../components/product_item_component';



class ShopPage extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.fetchProducts()
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
                <div>SHOP PAGE</div>
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
            products: Object.values(state.products)
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})


export default connect(mapStateToProps, mapDispatchToProps )(ShopPage);
