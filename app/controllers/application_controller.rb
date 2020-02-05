class ApplicationController < ActionController::Base
    
    helper_method :current_user, :login?

  def login(user)
    
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def required_login
   unless login?
    render json: { base: ["Invalid credentials"] }, status: 401
   end
  end

  def login?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
