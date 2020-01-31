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
        this.props.fetchProduct(this.props.productId)
        .then(product =>{
            this.setState({product: Object.values(product.product)[0]})
        })

    }

    addItemToCart(){
        this.props.addItem(this.state.product)
    }


    render(){
        let images;
        if (this.state.product.length !== 0) {
           images = this.state.product.photoUrls.map((image, idx)=>{
                return(
                    <img className='item-page-image' key={idx} src={image}/>
                )
            })         
         }

         let sizes = <div className='size-menu'>
                         {[7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13].map((num) =>{
                            return(
                                <div key={num}className='size-item'>{num}</div>
                                )
                            })
                        }
                    </div>

       

        
        
        return  (
            <div className='item-page'>
                <div className='item-page-image-section'>
                    {images}
                    <div className='detail-page-empty-div'></div>
                </div>               
                <div className='item-page-detail-section'>
                    <div className='item-page-detail-top'>
                        <p className='item-page-title'>{this.state.product.title}</p>
                        <p className='item-page-price'>${this.state.product.price}</p>
                    </div>
                    <p className='item-page-description'>{this.state.product.description}
                    </p>  
                    <p>Select Size</p>
                    {sizes}
                    <div className='add-item-btn' onClick={this.addItemToCart}>Add To Cart</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{

    return(
        {
            productId: ownProps.match.params.id,
            product: Object.values(state.products)[0]
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps) (productDetail);