Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :artworks, only: [:new, :create, :destroy, :show, :index] do
      resources :annotations, only: [:new]
      resources :comments, only: [:new]
    end
    resources :annotations, only: [:create, :update, :destroy, :show]
    resources :comments, only: [:index, :create, :update, :destroy, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
