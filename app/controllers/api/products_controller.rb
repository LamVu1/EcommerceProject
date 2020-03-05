class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render :index
    end

    def show    
        @products = Product.where(id: params[:product_id])
        
        if @products
            render :index
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

end