// this.counter = 1;

// handlePrev(){
//     // let prevbtn=document.getElementsByClassName('prev-btn');
//     // let nextbtn=document.getElementsByClassName('next-btn');

//     // let sliderImage =document.querySelectorAll('.slider-image')
//     // let size = sliderImage[0].clientWidth;
//     // let carouselslide =document.querySelector('.carousel-slide')
//     // carouselslide.style.transition = 'transform 0.5s ease-in-out'
//     // this.counter--;
//     // carouselslide.style.transform = 'translateX(' +(-size*(this.counter-1)) + 'px)';
//     // if(this.counter < sliderImage.length -1){
//     //     nextbtn[0].style.display = 'flex'
//     // }
//     // if(this.counter === 1){
//     //     prevbtn[0].style.display = "none";
//     //     return;}
// }

// handleNext(){
//         // let nextbtn=document.getElementsByClassName('next-btn');
//         // let prevbtn=document.getElementsByClassName('prev-btn');

//         // let sliderImage =document.querySelectorAll('.slider-image')
//         // let size = sliderImage[0].clientWidth;
//         // let carouselslide =document.querySelector('.carousel-slide')
//         // carouselslide.style.transition = 'transform 0.5s ease-in-out'
//         // carouselslide.style.transform = 'translateX(' +(-size*(this.counter)) + 'px)';
//         // this.counter++;
//         // if(this.counter>=1){
//         //     prevbtn[0].style.display = "flex";
//         // }
//         // if(this.counter === sliderImage.length -2){
//         //     nextbtn[0].style.display = "none";
//         //     return;}
// }



// render(){
    
            

//     let {products} = this.props
//     let productsdiv = Object.values(products).slice(0,6).map((product, idx)=>{    
//         if(idx<3){
//             return(
//                 <div key={idx} className='slider-div'>
//                     <img key={idx} className='slider-image' src={product.photoUrls[0]}></img>
//                     <div>{product.title}</div>
//                     <div>{product.price}</div>
//                 </div>
//             )
//         }else{
//             return(
//                 <div key={idx} className='slider-div' style={{display: 'none'}}>
//                     <img key={idx} className='slider-imager' src={product.photoUrls[0]}></img>
//                     <div>{product.title}</div>
//                     <div>{product.price}</div>
//                 </div>
//             )
//         }
//     })  
       
//         //     return(
//         //         <div className='slider-div'>
//         //             <img key={idx} className='slider-imager' src={product.photoUrls[0]}></img>
//         //         </div>

//         //     )
//         // }
    
    
    
//     // <li key={idx} className='slider-image'>
//     //     <img key={idx} className='slider-images' src={product.photoUrls[0]}></img>
//     //     <div className='item-title'>{product.title}</div> 
//     // </li>
//                 // <div className='item-detail'>
//                 // <Link to={`/product/${product.id}`}>
//                 //     <div className='item-title'>{product.title}</div> 
//                 // </Link>
//                 // <div className='item-price'>${product.price}</div>
//     return(
//         <div className='carousel-container'>
//             <div className='prev-btn' onClick={this.handlePrev}><i className="fas fa-chevron-left"></i> </div>
//             <div className='carousel-slide'>
//                     {productsdiv}
//             </div>
//             <div className='next-btn' onClick={this.handleNext}><i className="fas fa-chevron-right"></i></div>
//         </div>
    
//     )
// }
// }


// .carousel-container{
  
//     width: 100%;
//     height: 500px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     overflow: hidden;
// }

// .carousel-slide{
//   display: flex;
//     width: 100%;
//     height: 100%;


// // .slider-image{
// //     height: 100%;
// //     width: 33%;
// // }