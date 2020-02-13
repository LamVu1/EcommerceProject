import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductImages from './product_image_component';

class ProductItem extends React.Component{
    constructor(){
        super()
        this.state = {
            hover: false
        }
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)

    }

    handleEnter(e){
        e.preventDefault()
        this.setState({hover: true} )
        console.log(this.state)
    }

    handleLeave(e){
        e.preventDefault()
        this.setState({hover: false} )
        console.log(this.state)
    }

      
    render(){
        let {item} = this.props
  
        // {
        //     this.state.hover
        //     ?
        //     <ProductImages 
        //     images = {item.photoUrls}
        //     id = {item.id}
        // />
        // :null
        // }
        return(
            <div className='item'>
                <img className='item-image' src={item.photoUrls[0]} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}/>
                
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

export default connect(null,null)(ProductItem);