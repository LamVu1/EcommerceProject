import * as APIUtil from './product_api_utils';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'; 
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';


const receiveProducts = (products) => ({
    products: products,
    type: RECEIVE_ALL_PRODUCTS
});

const receiveProduct = (product) => ({
    product: product,
    type: RECEIVE_PRODUCT
});

export const fetchProducts = ()=>(dispatch)=>{
    
return(
    APIUtil.fetchProducts().then( products => dispatch(receiveProducts(products)))
)
}

export const fetchProduct = (id)=>(dispatch)=>{
    
    return(
    APIUtil.fetchProduct(id).then( product => dispatch(receiveProduct(product)))
    )
}