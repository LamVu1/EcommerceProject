export const fetchProducts = () => {
  
    return(
      $.ajax(
        {
          method: 'GET',
          url: '/api/products',
        }
      )
    )
};


export const fetchProduct = (product_id) => {

    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/products/1`,
                data: {product_id},
            }
        )
    )
};