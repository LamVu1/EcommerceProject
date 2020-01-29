class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render 'api/products/index'
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render 'api/products/show'
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

end