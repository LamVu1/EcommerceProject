const carouselslide =document.querySelector('carousel-slide')
const sliderImage =document.querySelectorAll('slider-image')
const prev =document.querySelector('prev-btn')
const next =document.querySelector('next-btn')
let counter = 1;
const size = sliderImage[0].clientWidth;
carouselslide.style.transform = 'translateX(' +(-size*counter) + 'px)';

next.addEventListener('click',()=>{
    if(counter >= sliderImage.length -1) return;

    counter++;
    carouselslide.style.transform = 'translateX(' +(-size*counter) + 'px)';
})

prev.addEventListener('click',()=>{
    if(counter <= 0) return;
    counter--;
    carouselslide.style.transform = 'translateX(' +(-size*counter) + 'px)';
})