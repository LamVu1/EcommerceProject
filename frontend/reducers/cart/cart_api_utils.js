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

export const createCartItem = (cart_item) => {
  
  return(
      $.ajax(
          {
              method: 'POST',
              url: `/api/cart_items`,
              data: {cart_item}
          }
      )
  )
};

export const updateCartItem = (cart_item) => {
  
  return(
      $.ajax(
          {
              method: 'PATCH',
              url: `/api/cart_items/${cart_item.id}`,
              data: {cart_item}
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