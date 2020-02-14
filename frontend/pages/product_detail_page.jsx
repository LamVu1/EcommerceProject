import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../reducers/products/product_actions';
import { addItem } from '../reducers/cart/cart_actions';
import { Link } from 'react-router-dom';


class productDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            product: '',
            size: 7
        }
        this.addItemToCart = this.addItemToCart.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.productId)
        .then(product =>{
            this.setState({product: Object.values(product.product)[0]})
        })

    }

    addItemToCart(){

        let prod = {...this.state.product};
        prod.size = this.state.size;
        this.props.addItem(prod)
    }

    handleSize(e){
     
        let prev = document.getElementsByClassName('selected');
        if(prev.length){          
            prev[0].classList.remove('selected');
        }
        e.target.classList.add('selected')
        this.setState({size: e.target.innerHTML })
    }

    handleBack(){
        this.props.history.goBack();
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
                                <div key={num} className='size-item' onClick={this.handleSize}>{num}</div>
                                )
                            })
                        }
                    </div>

       

        
        
        return  (
            <div className='item-page'>
                <div className='item-page-top'>                
                    <div className='item-page-image-section'>
                    <div onClick={this.handleBack}>
                        <div className='Back-link'>
                            Go Back
                        </div>
                    </div>
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
                <div className='item-page-top'>
                
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{

    return(
        {
            productId: ownProps.match.params.id,
            product: Object.values(state.entities.products)[0],
            history: ownProps.history
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps) (productDetail);