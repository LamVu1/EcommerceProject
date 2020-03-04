Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resource :session, only: [:create, :destroy]
    
    resources :users, only: [:create, :show]

    resources :products, only: [:index, :show]

    resources :likes, only: [:create, :index, :destroy] 

    resources :cart_items
      
  end

  root "static_pages#root"
  
end
