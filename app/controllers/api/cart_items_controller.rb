class Api::CartItemsController < ApplicationController

    def create
      
        @cart_item = current_user.cart_items.select {|cart_item| cart_item.product_id == params[:cart_item][:product_id].to_i && cart_item.size==params[:cart_item][:size].to_f}.first
        if @cart_item!=nil
          @cart_item.quantity+=1
          if @cart_item.save
            render :show
          else
            render json: @cart_item.errors.full_messages, status: 422          
          end 
        else     
          @cart_item = CartItem.new(cart_item_params)
          @cart_item.user_id = current_user.id  
          if @cart_item.save
            render :show
          else
            render json: @cart_item.errors.full_messages, status: 422          
          end
        end
    end

    def show
        @cart_item = current_user.cart_items.select {|cart_item| cart_item.product_id == params[:product_id].to_i && cart_item.size==params[:size]}.first
        if @cart_item
          render :show
        else
          render json: ['something went wrong'], status: 422          
        end  
    end
    
    def index
      
        @cart_items = current_user.cart_items
        render :index
    end

    def update
      
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(quantity: params[:cart_item][:quantity])
          render :show
        else
            render json: @cart_item.errors.full_messages, status: 422          
        end
      end
    
      def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
          render :show
        else
          render json: @cart_item.errors.full_messages, status: 422
        end
      end
    


    def cart_item_params
        params.require(:cart_item).permit(:quantity, :size, :product_id)
    end



end
