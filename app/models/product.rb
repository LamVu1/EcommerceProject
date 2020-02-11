class Product < ApplicationRecord
    validates :title, :description, :price,  presence: true

    has_many_attached :photos

    has_many :cart_items,
    class_name: :CartItem,
    foreign_key: :product_id
    
end
