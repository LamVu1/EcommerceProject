class Api::CartItemsController < ApplicationController

    def create
        @cart_item = current_user.cart_items.select {|cart_item| cart_item.product_id == params[:product_id].to_i && cart_item.size==params[:size]}.first
        if @cart_item
          render :show
        else     
          @cart_item = CartItem.new(cart_item_params)
          if @cart_item.save
            render :show
          else
            render json: @cart_item.errors.full_messages, status: 422          
          end
        end
    end

    def show
        @cart_item = current_user.cart_items.select {|cart_item| cart_item.product_id == params[:product_id].to_i && cart_item.size==params[:size]}.first
        else
          @cart_item = nil
        end  
        render :show
    end
    
    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def update
        @cart_item = LineItem.find(params[:id])
        if @cart_item.update(cart_item_params)
          render :show
        else
            render json: @cart_item.errors.full_messages, status: 422          
        end
      end
    
      def destroy
        @cart_item = LineItem.find(params[:id])
        if @cart_item.destroy
          render :show
        else
          render json: @cart_item.errors.full_messages, status: 422
        end
      end
    


    def cart_item_params
        params.require(:cart_item).permit(:quantity, :size, :user_id, :product_id)
    end



end
