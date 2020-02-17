class Product < ApplicationRecord
    validates :title, :description, :price,  presence: true
    
    has_many_attached :photos

    def ensure_photo
        if !self.photos.attached?
            self.photos.attach(io: File.open('app/assets/images/logo.png'), filename: 'logo.png', content_type: 'image/png')
        end
    end


    has_many :cart_items,
    class_name: :CartItem,
    foreign_key: :product_id
    
end
