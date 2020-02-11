@cart_items.each do |cart_item|
    json.set! cart_item.id do 
        json.id cart_item.id
        json.title cart_item.product.title
   end
end