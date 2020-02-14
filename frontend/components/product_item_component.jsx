import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductImages from './product_image_component';

class ProductItem extends React.Component{
    constructor(){
        super()
      
    }


      
    render(){
        let {item} = this.props
  


        return(
            <div className='item'>
                
                    <ProductImages 
                    images = {item.photoUrls}
                    id = {item.id}
                    />
                <div className='item-detail'>
                    <Link to={`/product/${item.id}`}>
                        <div className='item-title'>{item.title}</div> 
                    </Link>
                    <div className='item-price'>${item.price}</div>
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

// const mapStateToProps = (state) => {
//     return(
//         {
//             hidden: state.ui.hidden
//         }
//     )
// }

// const mapDispatchToProps = (dispatch) =>({
//     toggleHover: ()=>dispatch(toggleHover())
// })

export default connect(null,null)(ProductItem);