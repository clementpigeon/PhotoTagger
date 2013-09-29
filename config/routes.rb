NewAuthDemo::Application.routes.draw do
  root :to => "static_pages#root"

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  namespace "api", :defaults => { :format => :json } do

    resources :users do
      resources :photos, only: [:index]
    end

    resources :photos, only: [:create] do
      resources :photo_taggings, only: [:index]
    end

    resources :photo_taggings, only: [:create, :destroy]

  end
end
