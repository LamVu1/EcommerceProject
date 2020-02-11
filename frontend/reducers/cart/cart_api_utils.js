export const fetchCartItems = () => {
  
    return(
      $.ajax(
        {
          method: 'GET',
          url: '/api/cart_items',
        }
      )
    )
};


export const fetchCartItem = (item) => {
  
    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/cart_items/${item.id}`,
                data: item
            }
        )
    )
};

export const createCartItem = (item) => {
  
  return(
      $.ajax(
          {
              method: 'POST',
              url: `/api/cart_items/new`,
              data: item
          }
      )
  )
};

export const updateCartItem = (item) => {
  
  return(
      $.ajax(
          {
              method: 'PATCH',
              url: `/api/cart_items/${item.id}/edit`,
              data: item
          }
      )
  )
};

export const deleteCartItem = (item) => {
  
  return(
      $.ajax(
          {
              method: 'DELETE',
              url: `/api/cart_items/${item.id}`
          }
      )
  )
};