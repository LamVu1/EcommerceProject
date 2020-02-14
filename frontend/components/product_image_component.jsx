import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ProductImages extends React.Component{
    constructor(){
        super();
        this.state = {
            main: 0,
            hidden: true,
        }
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    }

    handleHoverEnter(e){
        let id = e.currentTarget.getAttribute('value')
        e.currentTarget.classList.add('selected')
        this.setState(state => ({main: id}) )
    }

    handleHoverLeave(e){
        let id = e.currentTarget.getAttribute('value')
        e.currentTarget.classList.remove('selected')
    }

    handleEnter(){
        this.setState({hidden: false, main: 0})
    }

    handleLeave(){
        this.setState({hidden: true})
    }

    render(){
        let {id, images} = this.props
        let small = images.map((image,id)=>{
            return(
                <img key={id} className='item-image-small' value={id} onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverLeave} src={image}/>
            )
        })

        let main = images[this.state.main]
     
        return(
            <div className='item-images'>
                {
                    this.state.hidden
                    
                    ?
              
                    <img className='item-image-main' src={main} onMouseEnter={this.handleEnter} />
                   
                    :
                    <div className='item-image-hover' onMouseLeave={this.handleLeave} >
                       <Link to={`/product/${id}`}>
                        <img className='item-hover-image-main' src={main}/>
                       
                       </Link>
                        <div className='item-image-small-container'>
                            {small}
                       </div>
                    </div>
                }
             
            </div>
        )
    }
}

export default connect(null, null)(ProductImages);
