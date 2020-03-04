import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductImages from './product_image_component';
import { createLike, deleteLike } from '../reducers/likes/like_actions';

class ProductItem extends React.Component{
    constructor(){
        super()
      this.handleLike = this.handleLike.bind(this);
      this.handleUnlike = this.handleUnlike.bind(this);

    }

    handleLike(){
        this.props.createLike(this.props.item.id)
        console.log('yes')
    }

    handleUnlike(){
        let like = this.props.likes.filter(like=>like.product_id===this.props.item.id)
        this.props.deleteLike(like[0].id)
    }


      
    render(){
        let {item} = this.props


     
     
  


        return(
            <div className='item'>
                
                    <ProductImages 
                    images = {item.photoUrls}
                    id = {item.id}
                    />
                    <div className='item-bottom-div'>

                    
                <div className='item-detail'>
                    <Link to={`/product/${item.id}`}>
                        <div className='item-title'>{item.title}</div> 
                    </Link>
                    <div className='item-price'>${item.price}</div>
                </div>
                <div className='item-like-div'>
                {this.props.likes.filter(like=>like.product_id===this.props.item.id).length===0
                   ?<button className='like-btn' onClick={this.handleLike}><i className="far fa-heart"></i></button>
                    :<button className='unlike-btn' onClick={this.handleUnlike}><i className="fas fa-heart"></i></button>

                }
                </div>

                </div>
            </div>
        )
    
    }
}
// const ProductItem =({item})=> {
//             // <Link to={`/product/${item.id}`}>
//             //    <img className='item-image' src={item.photoUrls[0]}/>
//                // </Link>
//             //    <ProductImages 
//             //        images = {item.photoUrls}
//             //        id = {item.id}
//             //    />
//     return(
//         <div className='item'>
//             <img className='item-image' src={item.photoUrls[0]}/>
//             <div className='item-detail'>
//                 <Link to={`/product/${item.id}`}>
//                     <div className='item-title'>{item.title}</div> 
//                 </Link>
//                 <div className='item-price'>${item.price}</div>
//             </div>
//         </div>
//     )

// }

const mapStateToProps = (state) => {
    
    return(
        {
           likes: Object.values(state.entities.likes)
        }
    )
}

const mapDispatchToProps = (dispatch) =>({
    createLike: (product_id)=>dispatch(createLike(product_id)),
    deleteLike: (like_id)=>dispatch(deleteLike(like_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);