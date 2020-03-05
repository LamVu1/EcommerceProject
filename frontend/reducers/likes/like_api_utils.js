export const fetchLikes = ()=>{
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/likes`
            }
        )
    )
}

export const fetchLike = (post_id)=>{
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/likes`,
                data: {post_id}
            }
        )
    )
}


export const createLike = (product_id)=>{
    return(
        $.ajax(
        {
            method: 'POST',
            url: `/api/likes`,
            data: {product_id}
        })
    )
}

export const deleteLike = (like_id) => {
    return(
        $.ajax(
        {
            method: 'DELETE',
            url: `/api/likes/${like_id}`
        })
    )
}