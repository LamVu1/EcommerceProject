import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../reducers/products/product_actions';
import {fetchLikes} from '../reducers/likes/like_actions';
import { toggleLoader } from '../reducers/ui/ui_actions';


import ProductItem from '../components/product_item_component';


class ProfilePage extends React.Component{
    constructor(){
        super()
        this.state ={
            products: [],
            likes: []
        }
    }


    componentDidMount(){
        this.props.fetchLikes().then(likes => {
            this.setState({likes: [...this.state.likes, ...Object.values(likes.likes)]})
            
            let arr = Object.values(likes.likes).map(ele=>ele.product_id)
            this.props.fetchProduct(arr).then(product =>{
                
                        this.setState({products: [...this.state.products, ...Object.values(product.products)] });
                        })
    })
    this.props.toggleLoader()
        setTimeout(()=>{this.props.toggleLoader()}, 500)   
    }


    render(){
        let products = this.state.products.map((product, id)=>{
            return(
                <ProductItem 
                key = {id}
                item = {product}
                />
            )
        })

        
            
        return(
            <div className='likes-page'>
                <h1>My Favorites</h1>
                <div className='likes-container'>
                    {products}
                    <div className='like-empty-div'></div>
                    <div className='like-empty-div'></div>
                    <div className='like-empty-div'></div>
                 


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    
    return(
        {
            likes: Object.values(state.entities.likes)
        } 
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id)=>dispatch(fetchProduct(id)),
    fetchLikes: ()=>dispatch(fetchLikes()),
    toggleLoader: () => dispatch(toggleLoader())

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
