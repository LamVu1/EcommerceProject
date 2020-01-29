json.set! @product.id do 
        json.id @product.id
        json.title @product.title
        json.description @product.description
        json.price @product.price
        json.photoUrls @product.photos.map {|file| url_for(file)}
end