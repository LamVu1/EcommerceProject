class Api::LikesController < ApplicationController

    def create
        @like = Like.new
        @like.product_id = params[:product_id]
        @like.user_id = current_user.id
        if @like.save
            render "api/likes/show"
        else
            render json:
            @like.errors.full_messages, status: 422
        end
    end


    def index
        @likes = Like.where(user_id: current_user.id)
        render "api/likes/index"
    end

  

    def destroy
        
        @like = Like.find(params[:id])
        @like.destroy
        render "api/likes/show"
    end

    def like_params
        params.require(:like).permit(:product_id)
    end

end