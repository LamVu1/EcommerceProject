export const addItemToCart = (cartItems, cartItemToAdd)=>{
  
    let cartItemsArr = Object.values(cartItems)
      const existingCartItem = cartItemsArr.find(
          cartItem => {
              cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
            }
      );
  
      
      if(existingCartItem){
          return cartItemsArr.map((cartItem) => {
            if(cartItem.id ===cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
              {
                 return({...cartItem, quantity: cartItem.quantity + 1})
              }
            else{ 
              return(cartItem)
            }
          })
        }
        
      return [...cartItemsArr, {...cartItemToAdd, quantity: 1}]
  }
  
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
      const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
      );
    
      if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
      }
    
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    };