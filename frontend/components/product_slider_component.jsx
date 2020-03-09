import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ProductSlider extends React.Component{ 
    constructor(){
        super();
        this.start = 0;
        this.end = 2;
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleLink = this.handleLink.bind(this);

    }

    handlePrev(){
        let prevbtn=document.getElementsByClassName('prev-btn');
        let nextbtn=document.getElementsByClassName('next-btn');
        let sliderImage =document.querySelectorAll('.slider-product')

        this.start--;
        sliderImage[this.start].style.display ='flex';
        sliderImage[this.end].style.display = 'none';
        this.end--;

        // let sliderImage =document.querySelectorAll('.slider-div');
        // sliderImage.slice()
        // let size = sliderImage[0].clientWidth;
        // let carouselslide =document.querySelector('.carousel-slide')
        // carouselslide.style.transition = 'transform 0.5s ease-in-out'
        // this.counter--;
        // carouselslide.style.transform = 'translateX(' +(-size*(this.counter-1)) + 'px)';
        if(this.end < sliderImage.length){
            nextbtn[0].style.display = 'flex'
        }
        if(this.start === 0){
            prevbtn[0].style.display = "none";
            return;}
    }

    handleNext(){
            let nextbtn=document.getElementsByClassName('next-btn');
            let prevbtn=document.getElementsByClassName('prev-btn');

            let sliderImage =document.querySelectorAll('.slider-product')
            
            this.end++;
            sliderImage[this.start].style.display ='none';
            sliderImage[this.end].style.display = 'flex';
            this.start++;

            // let size = sliderImage[0].clientWidth;
            // let carouselslide =document.querySelector('.carousel-slide')
            // carouselslide.style.transition = 'transform 0.5s ease-in-out'
            // carouselslide.style.transform = 'translateX(' +(-size*(this.counter)) + 'px)';
            // this.counter++;
            if(this.start>=1){
                prevbtn[0].style.display = "flex";
            }
            
            if(this.end === sliderImage.length-1){
                nextbtn[0].style.display = "none";
                return;}
    }

    handleLink(product){
        this.props.history.push(`/product/${product.id}`)
        location.reload()
    }

    render(){
        
                

        let {products, history} = this.props
        
        let productsdiv = Object.values(products).slice(0,6).map((product, idx)=>{    
            
            if(idx<3){
                return(
                    <div key={idx} className='slider-product' style={{display: 'flex'}}>
                       
                       
                        <img onClick={()=>this.handleLink(product)} key={idx} className='slider-image' src={product.photoUrls[0]}></img>
                      
                        <div onClick={()=>this.handleLink(product)} className='slider-title'>{product.title}</div>
                       
                        <div className='slider-price'>${product.price}</div>
                    </div>
                )
            }else{
                return(
                    <div key={idx} className='slider-product' style={{display: 'none'}}>
                        <img onClick={()=>this.handleLink(product)} key={idx} className='slider-image' src={product.photoUrls[0]}></img>
                        <div onClick={()=>this.handleLink(product)} className='slider-title'>{product.title}</div>
                        <div className='slider-price'>${product.price}</div>
                    </div>
                )
            }
        })  
           
        return(
            <div className='carousel-container'>
                <div className='prev-btn' onClick={this.handlePrev}><i className="fas fa-chevron-left"></i> </div>
                <div className='carousel-slide'>
                        {productsdiv}
                </div>
                <div className='next-btn' onClick={this.handleNext}><i className="fas fa-chevron-right"></i></div>
            </div>
        
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    
    
    return(
        {history: ownProps.history}
    )
}




export default withRouter(connect(null,mapStateToProps)(ProductSlider));
