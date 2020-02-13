import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ProductImages extends React.Component{
    constructor(){
        super();
        this.state = {
            main: 0
        }
    this.handleHover = this.handleHover.bind(this);
    }

    handleHover(id){
        this.setState(state => ({main: id}) )
    }

    render(){
        let {id, images} = this.props
        let small = images.map((image,id)=>{
            return(
                <img key={id} className='item-image-small' onMouseOver={()=> this.handleHover(id)} src={image}/>
            )
        })
    

        let main = images[this.state.main]

        return(
            <div className='item-images'>
                <div className='item-image-main-container'>
                    <Link to={`/product/${id}`}>
                        <img className='item-image-main' src={main}/>
                    </Link>
                </div>
                <div className='item-image-small-container'>
                    {small}
                </div>
            </div>
        )
    }
}

export default connect(null, null)(ProductImages);
