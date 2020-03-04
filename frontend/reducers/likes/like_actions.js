import * as APIUtil from './like_api_utils';
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES'; 
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


const receiveLikes = (likes)=>({
    likes: likes,
    type: RECEIVE_ALL_LIKES
})

const receiveLike = (like)=>({
    like: like,
    type: RECEIVE_LIKE
})

const removeLike = (like)=>({
    like: Object.values(like)[0],
    type: REMOVE_LIKE
})

export const fetchLikes = ()=>(dispatch)=>(
    APIUtil.fetchLikes().then( likes => dispatch(receiveLikes(likes)))
)

export const createLike = (product_id)=>(dispatch)=>{
    
    return(
    APIUtil.createLike(product_id).then(like=> dispatch(receiveLike(like))))
}

export const deleteLike = (like_id)=> (dispatch)=>(
    APIUtil.deleteLike(like_id).then( like =>dispatch(removeLike(like)))
)