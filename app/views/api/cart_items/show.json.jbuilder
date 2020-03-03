json.set! @cart_item.id do 
        json.id @cart_item.id
        json.title @cart_item.product.title
        json.size @cart_item.size
        json.description @cart_item.product.description
        json.price @cart_item.product.price
        json.quantity @cart_item.quantity 
        json.photoUrls @cart_item.product.photos.map {|file| url_for(file)}
end