@likes.each do |like|
    json.set! like.id do 
       json.id like.id
       json.user_id like.user_id
       json.product_id like.product_id
    end
end