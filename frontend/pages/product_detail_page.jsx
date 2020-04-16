import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../reducers/products/product_actions';
import { Link } from 'react-router-dom';
import ProductSlider from '../components/product_slider_component';
import { withRouter } from 'react-router-dom';
import {createCartItem} from '../reducers/cart/cart_actions';
import { createLike, deleteLike } from '../reducers/likes/like_actions';
import {fetchLikes} from '../reducers/likes/like_actions';
import { toggleLoader } from '../reducers/ui/ui_actions';



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
        this.handleTop = this.handleTop.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    componentDidMount(){
        this.handleTop();

        this.props.fetchLikes()
        this.props.fetchProduct(this.props.productId)
        .then(product =>{
            this.setState({product: Object.values(product.products)[0]})
        }).then(()=>{this.props.fetchProducts()})
        this.props.toggleLoader()
        setTimeout(()=>{this.props.toggleLoader()}, 500)
    }

    addItemToCart(){
        let prod = {}
        prod.product_id = this.state.product.id;
        prod.size = this.state.size;
        prod.quantity = 1;
        this.props.createCartItem(prod)
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
        this.props.history.push(`/shop`);
    }

    handleTop(){
        document.documentElement.scrollTop = 0;
    }


    handleLike(){
        this.props.createLike(this.state.product.id)
    }

    handleUnlike(){
       let like = this.props.likes.filter(like=>like.product_id===this.state.product.id)
       this.props.deleteLike(like[0].id)
    }

  

    render(){
        if(document.documentElement.scrollTop > 5500){
            
            this.handleTop();
            console.log(document.documentElement.scrollTop)

        }
        let {products} = this.props;   
        
       

        let images;
        if (this.state.product.length !== 0) {
           images = this.state.product.photoUrls.map((image, idx)=>{
                return(
                    <img className='item-page-image' key={idx} src={image}/>
                )
            })         
         }
         
         let sizes = <div className='size-menu'>
                <div key = {7} className='size-item selected' onClick={this.handleSize}>7</div>
                                
                         {[7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13].map((num) =>{
                            return(
                                <div key={num} className='size-item' onClick={this.handleSize}>{num}</div>
                                )
                            })
                        }
                    </div>

       

        
        
        return  (
            <div className='item-page' >
               
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
                        <p className='item-page-description'>{this.state.product.description}</p>  
                        <p>Select Size</p>
                        {sizes}
                        <div className='add-item-btn' onClick={this.addItemToCart}>Add To Cart</div>
                        {this.props.likes.filter(like=>like.product_id===this.state.product.id).length===0
                            ?   <div className='favorite-btn' onClick={this.handleLike} >
                                    
                                    Favorite<i className="far fa-heart"></i>     
                                    </div>
                                
                            :   <div className='unfavorite-btn'  onClick={this.handleUnlike} >
                                    
                                        Unfavorite<i className="fas fa-heart"></i>
                                   
                                </div>
                        }
                      

                    </div>
                </div>
                <div className='item-page-bottom'>
                    <h2>Explore the rest of our shoes</h2>
                    <img className='detail-image' src='https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/detail1.jpg'></img>
                    <h2>Designed to Help Reduce Injury</h2>
                    <p className='detail-p'>It’s an audacious shoe with an even more audacious goal. We designed the Nike React Infinity Run to help reduce the risk of running-related injuries. In one of our largest independent studies, the Nike React Infinity Run helped keep study participants running while training for a half marathon. Read more to learn more about our newest shoe.</p>
                    <img className='detail-image' src='https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/detail2.jpg'></img>
                    <h2>Runner Approved</h2>
                    <p className='detail-p'>To see if the shoe could help reduce injury compared to our motion control shoe, we commissioned a study through the British Columbia Sports Medicine Research Foundation where runners followed a 12-week variable training program ending in a half marathon. Based on the results, we think we’re on the right track: In testing*, the Nike React Infinity Run showed a 52 percent lower injury rate compared to the Nike Structure 22, our leading motion control shoe.</p>

                    <h2>“We’re on the right track”</h2>
                    <img className='detail-image' src='https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/detail3.jpg'></img>
                    <h2>Renew Your Run</h2>
                    <p className='detail-p-last'>In addition to soft underfoot cushioning, a durable rubber outsole provides traction where you need it most and a breathable mesh upper delivers a secure and lightweight fit. Altogether, the Nike Renew Run keeps your legs feeling refreshed and energized with each stride.</p>
                    <p className='rec-p'>YOU MIGHT ALSO LIKE</p>
                    <ProductSlider 
                        products = {products}
                    />
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


const mapStateToProps = (state,ownProps)=>{

    return(
        {
            productId: ownProps.match.params.id,
            history: ownProps.history,
            products: state.entities.products,
            likes: Object.values(state.entities.likes)

            
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    createCartItem: (item) => dispatch(createCartItem(item)),
    createLike: (product_id)=>dispatch(createLike(product_id)),
    deleteLike: (like_id)=>dispatch(deleteLike(like_id)),
    fetchLikes: ()=>dispatch(fetchLikes()),
    toggleLoader: () => dispatch(toggleLoader())


})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (productDetail));