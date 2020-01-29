import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../reducers/products/product_actions';
import { addItem } from '../reducers/cart/cart_actions';


class productDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            product: ''
        }
        this.addItemToCart = this.addItemToCart.bind(this)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.productId).then(product =>{
            this.setState({product: Object.values(product.product)[0]})
        })
    }

    addItemToCart(){
        this.props.addItem(this.state.product)
    }


    render(){
        
        return  (
            <div className='item-page'>
                <div className='item-page-image-section'>
                    <img className='item-page-image' src={this.state.product.photoUrls}/>
                </div>
                <div className='item-page-detail-section'>
                    <div className='item-page-detail-top'>
                        <p className='item-page-title'>{this.state.product.title}</p>
                        <p className='item-page-price'>{this.state.product.price}</p>
                    </div>
                    <p className='item-page-description'>{this.state.product.description}</p>
                    <button onClick={this.addItemToCart}>Add Item To Cart</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{

    return(
        {
            productId: ownProps.match.params.id
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps) (productDetail);