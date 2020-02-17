import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../reducers/products/product_actions';
import ProductItem from '../components/product_item_component';
import SlideShow from '../components/slideshow';


class ShopPage extends React.Component {
   constructor(props){
       super(props);
       this.handleTop = this.handleTop.bind(this);

   }
    componentDidMount(){
        this.props.fetchAllProducts()
    }
    
    handleTop(){
        document.documentElement.scrollTop = 0;
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

        
       
                    // <img src="https://c.static-nike.com/a/images/w_1920,h_400,c_fill,f_auto/e2f3e4b5-904a-4efd-9b4c-c6d261b57cf8/image.jpg" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_460,c_limit/ehgqwxonm1vk2pttvlq2/nike-running.jpg" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_460,c_limit/eb40b307-b29a-4222-bd7c-302f33365951/nike-skateboarding.png" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_698,c_limit/tpfrbdg1bholbs6t9t3d/nike-soccer.jpg" alt=""/>
                    // <div>
                    //     BAR
                    // </div>
                // <div>
                //     <SlideShow />
                // </div>
        
        return(
            <div className='shop-page'>
                <div className='shop-page-shoes'>
                {products}
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                </div>
                <div className='scroll-btn' onClick={this.handleTop}><i className="far fa-arrow-alt-circle-up"></i>
                <p>
                Back to Top
                </p>
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
