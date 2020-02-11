class CartItem < ApplicationRecord
    validates :quantity, numericality: { greater_than: 0 }, presence: true
    validates :user_id, :product_id, :size, presence: true

    belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id


end
