class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        debugger
        if @user.save
          login(@user)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
    end
    
    def show
      @user = User.find(params[:userId])
      if @user
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    # def update
    #   @user = User.find(params[:message][:id])
    #   @user.update_attribute(:message, params[:message][:message])
    #   if @user.save
    #     render "api/users/show"
    #   else
    #   render json: @user.errors.full_messages, status: 422
    #   end
    # end
       
    
      private
    
      def user_params
        debugger
        params.require(:user).permit(:username, :password, :email)
      end
end